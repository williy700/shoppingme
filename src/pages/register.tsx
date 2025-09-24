// import React, { useState } from "react";
// import "./register.css"; // make sure your CSS file is correctly imported

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ async function here
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // simple check before sending
//     if (formData.password !== formData.confirmPassword) {
//       setMessage("❌ Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("http://localhost:5006/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: formData.username,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("✅ Registration successful!");
//       } else {
//         setMessage(`❌ ${data.error || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("⚠️ failed to connect to server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Create Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>

//       {message && <p>{message}</p>}

//       <p>
//         Already have an account? <a href="/login">Login here</a>
//       </p>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("http://localhost:5006/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("✅ Registration successful!");
//       } else {
//         setMessage(`❌ ${data.error || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("⚠️ Failed to connect to server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after registration
import "./register.css"; // Make sure path is correct

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // initialize navigation

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!username || !email || !phone || !password) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5006/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.message || "Registration failed");
        return;
      }

      // Success
      setIsError(false);
      setMessage(data.message || "Registration successful");

      // Clear form
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");

      // Redirect to homepage
      navigate("/"); // go to home page
    } catch (err) {
      console.error(err);
      setIsError(true);
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      {message && (
        <p style={{ color: isError ? "red" : "green", marginTop: "1rem" }}>
          {message}
        </p>
      )}

      {/* Optional: link to login page */}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;





