import React, { useEffect, useState } from "react";

import "./App.css";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import useLocalStorage from "use-local-storage";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [shopList, setShopList] = useLocalStorage("theList", {
    name: "grocery",
    items: ["milk", "bread", "butter", "cheese"],
  });

  let newList = "";

  // useEffect(() => {
  //   setShopList(...shopList);
  // }, [shopList.items]);

  const [addItem, setAddItem] = useState("");

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const changeHandler = (event) => {
    setAddItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("before push", shopList.items);
    shopList.items.push(addItem);
    console.log("after push:", shopList.items);
    newList = shopList;
    console.log("working?", newList);
    setShopList(newList);
  };

  return (
    <div className="App" data-theme={theme}>
      <h2>Welcome to ListList!</h2>
      <button onClick={switchTheme}>change!</button>

      <LoginButton />
      <LogoutButton />
      <Dashboard shopList={shopList} />
      <form onSubmit={submitHandler}>
        <input
          name="newItem"
          type="text"
          value={addItem}
          onChange={changeHandler}
          placeholder="enter newItem"
        />
        <button>add item</button>
      </form>
      <Profile />
    </div>
  );
};

export default App;
