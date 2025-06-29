import React, { useState } from 'react';
import '../styles/Auth.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (user) {
      alert(`Your password is: ${user.password}`);
    } else {
      alert('Email not found.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Get Password</button>
      <p>
        <a href="/">Back to Login</a>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;