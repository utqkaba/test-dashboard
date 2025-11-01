import { useState } from "react";

export default function Login({ onLogin }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail === "admin@admin" && userPassword === "admin123") {
      onLogin(userEmail, userPassword);
    } else if (userEmail === "" && userPassword === "") {
      setError("email and password required!");
      return;
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3 w-full max-w-lg bg-stone-300 p-10 rounded-xl shadow-md shadow-stone-900"
      >
        <img src="/dashboard.svg" alt="logo" className="w-16 h-16" />

        <h2 className="text-2xl font-extralight mb-4 pb-1 border-b border-stone-900 text-shadow-lg">
          mini-dashboard
        </h2>

        <input
          type="email"
          placeholder="email"
          className="pl-3 bg-stone-200 w-full sm:w-2/3 border border-stone-900 p-2 rounded-xl"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="pl-3 bg-stone-200 w-full sm:w-2/3 border border-stone-900 p-2 rounded-xl"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
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
