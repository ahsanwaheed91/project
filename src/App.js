import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/auth/AuthContext';
import Login from './pages/auth/LoginPage';
import Signup from './pages/auth/SignUpPage';
import Logout from './pages/auth/Logout';
import PrivateRoute from './pages/auth/PrivateRoute';
import './App.css'
import Dashboard from './pages/admin/Dashboard/Dashboard';


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                                <Logout />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
