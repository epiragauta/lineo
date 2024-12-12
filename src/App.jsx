// ./src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';

import PrivateRoute from './components/PrivateRoute';
import TabsComponent from './components/TabsComponent';
import formsConfig from './data/formsConfig';
import TestButton from './components/TestButton';
import { AuthContext } from './context/AuthContext';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Opcional: Importar un spinner para mejorar la experiencia de carga
import { ClipLoader } from 'react-spinners';

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Puedes reemplazar esto con un componente de spinner o similar
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/home" replace /> : <SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Other Routes */}
        <Route path="/test-button" element={<TestButton />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  {/* <Route path="/dashboard" element={<Dashboard />} /> */}

                  {/* Rutas para Forms */}
                  {formsConfig.map((section) =>
                    section.subsections.map((subsection) => (
                      <Route
                        key={subsection.path}
                        path={subsection.path}
                        element={
                          <TabsComponent
                            FormComponent={subsection.form}
                            DashboardComponent={subsection.dashboard}
                            label={subsection.label}
                            formQuestions={subsection.formQuestions}
                            introductions={subsection.introductions}
                            subsection={subsection.subsection}
                          />
                        }
                      />
                    ))
                  )}

                  <Route path="/about" element={<About />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  {/* Redirige cualquier ruta desconocida a /home */}
                  <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
