import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const SignupPage = () => {
  // State for email and password input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook to navigate to other pages
  const navigate = useNavigate();

  // Handles user signup when button is clicked
  const handleSignup = () => {
    // Validate that both fields are filled
    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    // Get users from localStorage or use empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user with same email already exists
    const existing = users.find((u) => u.email === email);

    if (existing) {
      // Show error if user already registered
      alert("User already exists!");
    } else {
      // Add new user to array and save it back to localStorage
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));

      // Confirm signup and redirect to login page
      alert("Signup successful!");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <div className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <div className="auth-links">
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className="auth-container">
  //     <h2>Sign Up</h2>

  //     {/* Email input field */}
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />

  //     {/* Password input field */}
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />

  //     {/* Signup button */}
  //     <button onClick={handleSignup}>Sign Up</button>

  //     {/* Link to login page */}
  //     <p>
  //       Already have an account? <a href="/">Login</a>
  //     </p>
  //   </div>
  // );
};

export default SignupPage;
