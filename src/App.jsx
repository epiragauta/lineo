import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'; // Importa Home
import PrivateRoute from './components/PrivateRoute';
import Section4_1 from './pages/Sections/Section4/Section4_1';
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
                    <Route path="home" element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="4/4.1" element={<Section4_1 />} />
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
