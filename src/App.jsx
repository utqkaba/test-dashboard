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
import MyProfile from "./pages/MyProfile";
import Users from "./pages/Users";
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

        {/* DASHBOARD LAYOUT + INNER ROUTES */}
        <Route
          path="/"
          element={
            user ? (
              <DashboardLayout user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="profile" element={<MyProfile user={user} />} />
          <Route path="users" element={<Users user={user} />} />
        </Route>
      </Routes>
    </Router>
  );
}
