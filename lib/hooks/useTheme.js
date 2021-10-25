import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeProvider";

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
