import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import Whitelist from "../logic/Whitelist";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("user:", user);
  let guest = "";
  if (!user) {
    guest = true;
  } else {
    guest = Whitelist(user.email);
  }
  return isAuthenticated && !guest ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* {JSON.stringify(user, null, 2)} */}
      <JSONPretty data={user} />
    </div>
  ) : isAuthenticated && guest ? (
    <h2>stay tuned, {user.name}-- you're on The List!</h2>
  ) : null;
};

export default Profile;
