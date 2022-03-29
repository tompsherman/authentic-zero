import React from "react";

const AddButton = ({ maxxed, switchTheme }) => {
  console.log("mazzed", maxxed);
  let compTrue = true;
  const makeTrue = () => {
    maxxed = !maxxed;
    compTrue = !compTrue;
    console.log("flip flop max", maxxed, "flopflip comp", compTrue);
  };

  return compTrue ? (
    <div onClick={switchTheme}>
      <button>Add Item</button>
    </div>
  ) : !compTrue ? (
    <div onClick={switchTheme}>
      <button>+</button>
    </div>
  ) : null;
};

export default AddButton;
