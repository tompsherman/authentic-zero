import React from "react";

import "./App.css";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Dashboard />
      <Profile />
    </>
  );
};

export default App;
