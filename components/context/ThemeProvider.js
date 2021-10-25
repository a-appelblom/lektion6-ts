import { createContext, useReducer } from "react";
import { themeReducer } from "../../lib/reducers/themeReducer";

import light from "../../lib/themes/light";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, {
    theme: light,
    mode: "light",
  });
  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
