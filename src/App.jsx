import { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const clickSubmitForm = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    toast.success("Login successful!");
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    toast.success("Form reset!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-wide">
          Sign In
        </h2>

        <form onSubmit={clickSubmitForm} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/80"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <IoEyeSharp
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-white/70 cursor-pointer hover:text-white transition"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 text-white font-bold rounded-xl shadow-lg transition-transform"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl shadow-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          Not a member?{" "}
          <a href="#" className="text-pink-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
