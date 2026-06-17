import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.jpg";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const validUser = users.find(
        (user) =>
          user.username === username &&
          user.password === password
      );

      if (validUser) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(validUser)
        );

        navigate("/home");
      } else {
        setMsg("Invalid Username or Password");
      }
    } else {
      const existingUser = users.find(
        (user) => user.username === username
      );

      if (existingUser) {
        setMsg("Username already exists!");
        return;
      }

      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));

      setMsg("Account created successfully! Please login.");

      setUsername("");
      setPassword("");
      setIsLogin(true);
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/80 to-[#6A1B4D]/80"></div>

      {/* Card */}
      <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md">
        
        <h1 className="text-4xl font-bold text-center text-[#6A1B4D] mb-2">
          Kuchipudi Academy
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Classical Dance Learning Platform
        </p>

        <h2 className="text-center text-xl font-semibold text-[#D4AF37] mb-6">
          {isLogin ? "Login to Continue" : "Create Account"}
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
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {msg && (
          <p
            className={`text-center mt-5 font-medium ${
              msg.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setMsg("");
                setUsername("");
                setPassword("");
              }}
              className="ml-2 text-[#6A1B4D] font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>

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