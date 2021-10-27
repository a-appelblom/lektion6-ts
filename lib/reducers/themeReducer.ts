import {
  ThemeReducerAction,
  ThemeReducerState,
} from "../../components/context/ThemeProvider";
import dark from "../themes/dark";
import light from "../themes/light";
import wacky from "../themes/wacky";

export enum THEME_ACTIONS {
  TOGGLE_DARK = "toggleDark",
  TOGGLE_LIGHT = "toggleLight",
  TOGGLE_WACKY = "toggleWacky",
}

export function themeReducer(
  state: ThemeReducerState,
  action: ThemeReducerAction
): ThemeReducerState {
  console.log("State", state);
  console.log("Action", action);

  switch (action.type) {
    case "toggleDark":
      return { ...state, theme: dark, mode: action.payload };
    case "toggleLight":
      return { ...state, theme: light, mode: action.payload };
    case "toggleWacky":
      return { ...state, theme: wacky, mode: action.payload };

    default:
      return { ...state };
  }
}
