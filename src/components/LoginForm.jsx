import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("email and password required!");
      return;
    }

    setError("");
    onLogin?.({ email });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3 w-full max-w-lg bg-stone-300 p-10 rounded-xl shadow-md shadow-stone-900"
      >
        <img src="/dashboard.svg" alt="logo" className="w-16 h-16" />

        <h2 className="text-2xl font-extralight mb-4 pb-1 border-b border-stone-900 text-shadow-lg">
          welcome to mini-dashboard
        </h2>

        <input
          type="email"
          placeholder="email"
          className="bg-stone-200 w-full sm:w-2/3 border border-stone-900 p-2 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="bg-stone-200 w-full sm:w-2/3 border border-stone-900 p-2 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="font-extralight text-red-700">{error}</p>}

        <button
          type="submit"
          className="cursor-pointer w-full sm:w-1/3 p-2 bg-stone-300 border border-stone-900 hover:scale-105 transition duration-500 rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}
