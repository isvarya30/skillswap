import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, email, password);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setMessage("Registration successful!");
      navigate("/login");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-700">
      <form
        onSubmit={handleRegister}
        className="bg-black/80 p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-md"
      >
        <h2 className="text-4xl font-heading mb-8 text-primary text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border-2 border-primary bg-transparent placeholder-primary focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border-2 border-primary bg-transparent placeholder-primary focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl border-2 border-primary bg-transparent placeholder-primary focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <button
          type="submit"
          className="w-full py-3 bg-primary text-black font-bold rounded-xl hover:bg-pink-600 hover:scale-105 transition transform"
        >
          Register
        </button>

        {message && <p className="mt-4 text-center text-pink-300">{message}</p>}

        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
