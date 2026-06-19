import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>

      <p>
        This theme is saved in localStorage and persists even after page
        refresh.
      </p>

      <ThemeToggle />
    </div>
  );
}

export default App;