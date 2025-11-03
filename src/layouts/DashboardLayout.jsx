import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ user, onLogout }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar onLogout={onLogout} />
      <main className="flex-1 ml-64 p-6 bg-stone-200">
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}
