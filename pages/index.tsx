import useTheme from "../lib/hooks/useTheme";
import useRenderCount from "../lib/hooks/useRenderCount";
import { THEME_ACTIONS } from "../lib/reducers/themeReducer";
import { NextPage } from "next";
import { ThemeContext } from "../components/context/ThemeProvider";

const Home: NextPage = () => {
  const themeContext: ThemeContext = useTheme();
  const count: number = useRenderCount();

  return (
    <div style={themeContext.themeReducerState.theme}>
      <div style={{ height: "50vh", width: "50vw" }}>
        <h1 style={{ textAlign: "center" }}>Hej från koden</h1>
      </div>
      <button
        onClick={() =>
          themeContext.themeDispatch({
            type: THEME_ACTIONS.TOGGLE_DARK,
            payload: "dark",
          })
        }
      >
        toggle dark
      </button>
      <button
        onClick={() =>
          themeContext.themeDispatch({
            type: THEME_ACTIONS.TOGGLE_LIGHT,
            payload: "light",
          })
        }
      >
        toggle light
      </button>
      <button
        onClick={() =>
          themeContext.themeDispatch({
            type: THEME_ACTIONS.TOGGLE_WACKY,
            payload: "wacky",
          })
        }
      >
        toggle wacky
      </button>
      <div>
        <h3>Rendered: {count}</h3>
      </div>
    </div>
  );
};

export default Home;
