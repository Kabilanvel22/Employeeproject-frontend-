import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // replace console.log with actual login logic
  };

  return (
    <div className='body'>
    <div className="login-container">
   
      <div className="login-header">
        <h1>Welcome to Dial For Help</h1>
        <br/>
        <div className='omg'>
        <p>Please log in to continue</p>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
           <h2>Email</h2>
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            <h2>Password</h2>
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br/>
        <br/>
        <button type="submit" className="btn-primary">
          <h3>Login</h3>
        </button>
       
      </form>
    </div>
    </div>
  );
};

export default Login;