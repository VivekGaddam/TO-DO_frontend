import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div>
          <Routes>
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/register"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
