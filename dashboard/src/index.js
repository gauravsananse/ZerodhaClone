import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
const DASHBOARD_TOKEN_KEY = "zerodhaDashboardToken";

function DashboardGate() {
  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token") || localStorage.getItem(DASHBOARD_TOKEN_KEY);

    if (!token) {
      window.location.replace(`${FRONTEND_URL}/#/login`);
      return;
    }

    fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Session expired");
        return response.json();
      })
      .then((data) => {
        localStorage.setItem(DASHBOARD_TOKEN_KEY, token);
        window.history.replaceState({}, "", window.location.pathname);
        setUser(data.user);
      })
      .catch(() => {
        localStorage.removeItem(DASHBOARD_TOKEN_KEY);
        window.location.replace(`${FRONTEND_URL}/#/login`);
      })
      .finally(() => setCheckingSession(false));
  }, []);

  const logout = async () => {
    const token = localStorage.getItem(DASHBOARD_TOKEN_KEY);
    if (token) {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    localStorage.removeItem(DASHBOARD_TOKEN_KEY);
    window.location.assign(`${FRONTEND_URL}/#/login`);
  };

  if (checkingSession) return <p style={{ padding: "2rem" }}>Loading your dashboard...</p>;
  if (!user) return null;

  return <Home user={user} onLogout={logout} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardGate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
