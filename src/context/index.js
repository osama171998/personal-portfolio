import React from "react";

const initValues = {
  darkMode: false,
};

export const StateContext = React.createContext();

const ContextProvider = (props) => {
  const [state, setState] = React.useState(initValues);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
