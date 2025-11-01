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

export default function App() {
  // const [userEmail, setUserEmail] = useState(null);
  // const [userPassword, setUserPassword] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // setUserEmail(email);
    // setUserPassword(password);
    setUser({ email, password });
  };

  return (
    <Router>
      <Routes>
        {/* login page routing */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/welcome" />
            ) : (
              <div className="bg-stone-400 min-h-screen">
                <Login onLogin={handleLogin} />
              </div>
            )
          }
        />
        {/* welcome page routing */}
        <Route
          path="/welcome"
          element={user ? <Welcome user={user} /> : <Navigate to="/" />}
        />
        {/* dashboard page routing */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
