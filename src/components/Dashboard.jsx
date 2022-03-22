import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Whitelist from "../logic/Whitelist";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log("user:", user);

  let guest = "";
  if (!user) {
    guest = true;
  } else {
    guest = Whitelist(user.email);
  }

  return isLoading ? (
    <div>loading...</div>
  ) : isAuthenticated && !guest ? (
    <>
      <h2>Dashboard</h2>
      <h4>Welcome back to the App, fellow user!</h4>
    </>
  ) : isAuthenticated && guest ? (
    <h3>App still under development! sign up for the sneak preview!!!</h3>
  ) : null;
};

export default Dashboard;
