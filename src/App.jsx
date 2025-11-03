import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setUser({ email, password });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* LOGIN ROUTE */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/welcome" />
            ) : (
              <div className="bg-stone-200 min-h-screen">
                <Login onLogin={handleLogin} />
              </div>
            )
          }
        />

        {/* WELCOME ROUTE */}
        <Route
          path="/welcome"
          element={user ? <Welcome user={user} /> : <Navigate to="/" />}
        />

        {/* DASHBOARD ROUTE */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <DashboardLayout onLogout={handleLogout}>
                <Dashboard user={user} />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
