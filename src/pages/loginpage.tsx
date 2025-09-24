// type LoginProps = { onLogin: () => void };
// import "./loginpage.css";

// export default function LoginPage({ onLogin }: LoginProps) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-96">
//         <h1 className="text-xl font-bold text-center mb-4">Login</h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             onLogin();
//           }}
//           className="space-y-3"
//         >
//           <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
//           <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"; // reuse your register.css for consistent styling

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5006/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.message || "Login failed");
        return;
      }

      // Success
      setIsError(false);
      setMessage(data.message || "Login successful");

      // Optionally store token or user info if backend returns it
      // localStorage.setItem("token", data.token);

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      console.error(err);
      setIsError(true);
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      {message && (
        <p style={{ color: isError ? "red" : "green", marginTop: "1rem" }}>
          {message}
        </p>
      )}

      {/* Optional: link to registration page */}
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;

