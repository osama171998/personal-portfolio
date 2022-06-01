import React from "react";
import { DarkModeReducer } from "../reducers/index";
const initValues = {
  darkMode: false,
};

export const StateContext = React.createContext();

const ContextProvider = (props) => {
  // const [state, setState] = React.useState(initValues);
  const [state, dispatch] = React.useReducer(DarkModeReducer, initValues);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
