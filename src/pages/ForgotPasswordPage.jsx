import React, { useState } from "react";
import "../styles/Auth.css";

const ForgotPasswordPage = () => {
  // State to hold the entered email
  const [email, setEmail] = useState("");

  // Handles password retrieval logic
  const handleReset = () => {
    // Fetch users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Try to find a user matching the entered email
    const user = users.find((u) => u.email === email);

    if (user) {
      // If found, display the password
      alert(`Your password is: ${user.password}`);
    } else {
      // If not found, show error
      alert("Email not found.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <div className="auth-form">
        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleReset}>Get Password</button>
      </div>
      <div className="auth-links">
        <p>
          <a href="/">Back to Login</a>
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className="auth-container">
  //     <h2>Forgot Password</h2>

  //     {/* Input for email */}
  //     <input
  //       type="email"
  //       placeholder="Enter registered email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />

  //     {/* Button to retrieve password */}
  //     <button onClick={handleReset}>Get Password</button>

  //     {/* Link back to login page */}
  //     <p>
  //       <a href="/">Back to Login</a>
  //     </p>
  //   </div>
  // );
};

export default ForgotPasswordPage;
