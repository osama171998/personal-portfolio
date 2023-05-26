export const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "ENABLE":
      return { ...state, darkMode: true };
    case "DISABLE":
      return { ...state, darkMode: false };

    default:
      return state;
  }
};
