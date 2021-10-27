import { createContext, Dispatch, Reducer, useReducer } from "react";
import { themeReducer, THEME_ACTIONS } from "../../lib/reducers/themeReducer";

export interface ThemeContext {
  themeReducerState: ThemeReducerState;
  themeDispatch: Dispatch<ThemeReducerAction>;
}

export interface ThemeReducerState {
  theme: Theme;
  mode: string;
}

export interface ThemeReducerAction {
  payload: string;
  type: THEME_ACTIONS;
}

export interface Theme {
  color: string;
  backgroundColor: string;
}

import light from "../../lib/themes/light";

export const ThemeContext = createContext<ThemeContext>({
  themeReducerState: {
    theme: light,
    mode: "light",
  },
  themeDispatch: (value: ThemeReducerAction) => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [themeReducerState, themeDispatch] = useReducer<
    Reducer<ThemeReducerState, ThemeReducerAction>
  >(themeReducer, {
    theme: light,
    mode: "light",
  });
  return (
    <ThemeContext.Provider value={{ themeReducerState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
