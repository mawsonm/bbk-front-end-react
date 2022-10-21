import React, { createContext, useState } from "react";
export const SnackContext = React.createContext({
  snackVisible: false,
  message: "",
  showSnack: (message) => {},
  closeSnack: () => {},
});

const SnackContextProvider = (props) => {
  let time;
  const [showSnack, setShowSnack] = useState(false);
  const [message, setMessage] = useState("");
  const showSnackHandler = (message) => {
    setShowSnack(true);
    setMessage(message);
    time = setTimeout(() => setShowSnack(false), 5000);
  };

  const closeSnack = () => {
    setShowSnack(false);
    setTimeout(() => {
      setMessage("");
    }, 300);
    time.clearTimeout();
  };
  const val = {
    snackVisible: showSnack,
    message: message,
    showSnack: showSnackHandler,
    closeSnack: closeSnack,
  };
  return (
    <SnackContext.Provider value={val}>{props.children}</SnackContext.Provider>
  );
};

export default SnackContextProvider;
