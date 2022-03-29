import React, { useState, useEffect } from "react";

const List = ({ shopList }) => {
  let currentList = shopList;
  console.log("does this re-fire???", shopList);
  return (
    <>
      <h2>{currentList.name}</h2>
      {currentList.items.map((item) => {
        return <p>{item}</p>;
      })}
      {/* <div>
        <p>change the list you're viewing:</p>
        <form onSubmit={null} onClick={null}>
          <input list="list" name="list" />
          <datalist id="list">
            <option value="grocery"></option>
            <option value="household"></option>
            <option value="projectA"></option>
          </datalist>
          <input type="submit" />
        </form>
      </div> */}
    </>
  );
};

export default List;
