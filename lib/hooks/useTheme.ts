import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeProvider";

export default function useTheme(): ThemeContext {
  const theme: ThemeContext = useContext(ThemeContext);
  return theme;
}
