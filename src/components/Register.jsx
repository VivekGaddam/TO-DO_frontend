import React, { useState } from 'react';
import API from '../api';
import "./register.css"
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/register', { username, password });
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      navigate('/dashboard')
    } catch (error) {
      alert('Register failed!');
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="username">
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password">
      <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>

  );
};

export default Register;
