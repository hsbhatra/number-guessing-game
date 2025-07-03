import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const LoginPage = () => {
  // State for email and password input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook to navigate to other routes programmatically
  const navigate = useNavigate();

  // Handles login logic when the user clicks the login button
  const handleLogin = () => {
    // Retrieve users array from localStorage or default to empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Search for a user matching the entered email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // If credentials match, show success message
      alert("Login successful!");

      // Mark user as logged in for route protection
      localStorage.setItem("loggedIn", "true");

      // Navigate to game screen
      navigate("/game");
    } else {
      // If no match found, show error
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="auth-form">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="auth-links">
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className="auth-container">
  //     <h2>Login</h2>

  //     {/* Email input field */}
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       onChange={(e) => setEmail(e.target.value)}
  //       value={email}
  //     />

  //     {/* Password input field */}
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       onChange={(e) => setPassword(e.target.value)}
  //       value={password}
  //     />

  //     {/* Login button */}
  //     <button onClick={handleLogin}>Login</button>

  //     {/* Navigation links to Signup and Forgot Password */}
  //     <p>
  //       Don't have an account? <a href="/signup">Sign Up</a>
  //     </p>
  //     <p>
  //       <a href="/forgot-password">Forgot Password?</a>
  //     </p>
  //   </div>
  // );
};

export default LoginPage;
