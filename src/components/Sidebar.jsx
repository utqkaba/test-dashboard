import { NavLink, Navigate } from "react-router-dom";
import { Home, Users, User, Shield, LogOut } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ onLogout }) {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "My Profile", icon: User, path: "/profile" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Roles & Permissions", icon: Shield, path: "/roles" },
  ];

  const [shouldLogout, setShouldLogout] = useState(false);

  const handleLogout = () => {
    onLogout();
    setShouldLogout(true);
  };

  if (shouldLogout) {
    return <Navigate to="/" replace />;
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-84 bg-stone-100 border-r border-stone-200 p-4 shadow-lg">
      <div className="flex items-center justify-center mb-10 mt-2">
        <img src="/dashboard.svg" alt="logo" className="w-12 h-12 mr-4" />
        <h1 className="text-2xl font-light text-shadow-lg tracking-tight">
          Mini-Dashboard <br /> Admin Panel
        </h1>
      </div>
      <nav className="space-y-2 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center w-full font-extralight text-stone-900 px-3 py-4 rounded-lg hover:scale-105 transition ${
                isActive
                  ? "bg-stone-200 text-blue-400"
                  : "text-stone-900 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3 text-gray-500" />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="cursor-pointer flex items-center w-full font-extralight text-stone-900 px-3 py-4 rounded-lg hover:scale-105 transition hover:bg-gray-100"
        >
          <LogOut className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-sm">Log Out</span>
        </button>
      </nav>
      <footer className="absolute bottom-3 left-0 w-full font-extralight text-shadow-lg text-center text-xs text-stone-900">
        © 2025 Utku Kaba
      </footer>
    </aside>
  );
}
