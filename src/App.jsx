import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // Import Sign-Up Page
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'; // Import Home
import PrivateRoute from './components/PrivateRoute';
import Section4_1 from './pages/Sections/Section4/Section4_1';
import TestButton from './components/TestButton';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/home" replace /> : <SignUp />} />
        <Route path="/test-button" element={<TestButton />} />

        {/* Protected Routes with Layout */}
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
