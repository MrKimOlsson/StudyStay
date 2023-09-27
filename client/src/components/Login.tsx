// Example of the Login component:
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth"; // Implement loginUser function

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const user = await loginUser(username, password);

      // Assuming loginUser returns a token upon successful login
      // localStorage.setItem("token", user.token);
      console.log(user)

      // Set authentication state to true
      // You can use React context or another state management method
      // to track the user's authentication state.

      navigate("/"); // Redirect to the authenticated route
    } catch (error) {
      alert("Login failed");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin} id="loginForm">
      <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;