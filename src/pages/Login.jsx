import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.jpg";

function Login() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!savedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, password })
      );

      setMsg("Account created successfully! Please login.");
      setUsername("");
      setPassword("");
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      navigate("/home");
    } else {
      setMsg("Invalid Username or Password");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bbg-linear-to-r from-[#1F1F1F]/80 to-[#6A1B4D]/80"></div>

      {/* Login Card */}
      <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-[#6A1B4D] mb-2">
          Kuchipudi Academy
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Classical Dance Learning Platform
        </p>

        <h2 className="text-center text-xl font-semibold text-[#D4AF37] mb-6">
          {savedUser ? "Login to Continue" : "Create Your Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Enter Username"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A1B4D]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A1B4D]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#6A1B4D] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#4E1438] transition duration-300"
          >
            {savedUser ? "Login" : "Create Account"}
          </button>

        </form>

        {msg && (
          <p className="text-center text-red-600 mt-5 font-medium">
            {msg}
          </p>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Preserving Tradition • Empowering Performers
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;