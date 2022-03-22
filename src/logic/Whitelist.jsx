const Whitelist = (email) => {
  let guest = true;
  const whitelist = "43cedarbeach@gmail.com";

  if (email === whitelist) {
    guest = false;
  } else {
    guest = true;
  }

  console.log("whitelist,", guest);

  return guest;
};

export default Whitelist;
