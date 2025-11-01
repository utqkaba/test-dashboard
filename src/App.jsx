import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

export default function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleLogin = (email, password) => {
    setUserEmail(email);
    setUserPassword(password);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userEmail && userPassword ? (
              <Navigate to="/welcome" />
            ) : (
              <div className="bg-stone-400 min-h-screen">
                <Login onLogin={handleLogin} />
              </div>
            )
          }
        />
        <Route
          path="/welcome"
          element={
            userEmail && userPassword ? (
              <Welcome userEmail={userEmail} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
