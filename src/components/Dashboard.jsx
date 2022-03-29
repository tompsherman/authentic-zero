import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Whitelist from "../logic/Whitelist";
import List from "./List";
import AddButton from "./AddButton";

const Dashboard = ({ shopList }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
      <List shopList={shopList} />
    </>
  ) : isAuthenticated && guest ? (
    <h3>App still under development! sign up for the sneak preview!!!</h3>
  ) : null;
};

export default Dashboard;
