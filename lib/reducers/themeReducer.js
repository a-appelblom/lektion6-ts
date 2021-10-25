import dark from "../../lib/themes/dark";
import light from "../../lib/themes/light";
import wacky from "../../lib/themes/wacky";

export const THEME_ACTIONS = {
  TOGGLE_DARK: "toggleDark",
  TOGGLE_LIGHT: "toggleLight",
  TOGGLE_WACKY: "toggleWacky",
};

export function themeReducer(state, action) {
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
