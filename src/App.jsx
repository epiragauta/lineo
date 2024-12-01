// ./src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import formsConfig from './config/formsConfig';
import TestButton from './components/TestButton';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de Login sin Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/test-button" element={<TestButton />} />

        {/* Rutas protegidas con Layout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout>
                <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="forms">

                  {/* Rutas para Formularios */}
                  {formsConfig.map((section) =>
                    section.subsections.map((form) => (
                      <Route
                        key={form.path}
                        path={form.path} // Ruta relativa a '/forms'
                        element={<form.component />}
                      />
                    ))
                  )}

                  {/* Redirige cualquier ruta desconocida dentro de '/forms' a '/forms/create' */}
                  <Route path="*" element={<Navigate to="/home" replace />} />
                </Route>

                  {/* Redirige cualquier ruta desconocida a /home */}
                  <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
