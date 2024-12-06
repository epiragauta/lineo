// ./src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // Import Sign-Up Page
import About from './pages/About'; // Import About Page
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'; // Import Home

import PrivateRoute from './components/PrivateRoute';
import TabsComponent from './components/TabsComponent';
import formsConfig from './data/formsConfig';
import TestButton from './components/TestButton';
import { AuthContext } from './context/AuthContext';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* Auth Routes */}
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
                  <Route path="/dashboard" element={<Dashboard />} />

                {/* Rutas para Forms */}
                {formsConfig.map((section) =>
                  section.subsections.map((subsection) => (
                    <Route
                      key={subsection.path}
                      path={subsection.path} // Ruta relativa a '/forms'
                      element={
                        <TabsComponent
                          FormComponent={subsection.form}
                          DashboardComponent={subsection.dashboard}

                          label={subsection.label}
                          subsection={subsection.subsection}
                        />
                      }
                    />
                  ))
                )}
                <Route path="/about" element={<About/>} />

                {/* Redirige cualquier ruta desconocida a /home */}
                <Route path="*" element={<Navigate to="/home" replace />} />

                </Routes>
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Add ToastContainer to make toast notifications available globally */}
      <ToastContainer
        position="top-right" // Position of the toast
        autoClose={5000} // Automatically close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // New toasts appear at the bottom
        closeOnClick // Close toast on click
        rtl={false} // Left-to-right layout
        pauseOnFocusLoss // Pause toast timer when window loses focus
        draggable // Allow dragging to dismiss
        pauseOnHover // Pause timer on hover
        theme="colored" // Theme of the toast
      />
    </Router>
  );
}

export default App;
