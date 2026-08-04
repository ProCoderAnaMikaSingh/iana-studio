import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        alert("Login Successful ✅");

        window.location.href = "/admin/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-8 rounded-2xl shadow-2xl w-[400px]"
      >
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 rounded-lg mb-4 bg-zinc-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded-lg mb-6 bg-zinc-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-bold transition-all duration-300"
        >
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;