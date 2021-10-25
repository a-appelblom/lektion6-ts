import useTheme from "../lib/hooks/useTheme";
import useRenderCount from "../lib/hooks/useRenderCount";
import { THEME_ACTIONS } from "../lib/reducers/themeReducer";

export default function Home() {
  const theme = useTheme();
  const count = useRenderCount();

  return (
    <div style={theme.theme.theme}>
      <div style={{ height: "50vh", width: "50vw" }}>
        <h1 style={{ textAlign: "center" }}>Hej från koden</h1>
      </div>
      <button
        onClick={() =>
          theme.themeDispatch({
            type: THEME_ACTIONS.TOGGLE_DARK,
            payload: "dark",
          })
        }
      >
        toggle dark
      </button>
      <button
        onClick={() =>
          theme.themeDispatch({
            type: THEME_ACTIONS.TOGGLE_LIGHT,
            payload: "light",
          })
        }
      >
        toggle light
      </button>
      <button
        onClick={() =>
          theme.themeDispatch({
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
}
