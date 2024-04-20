import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document
      .querySelector("html")
      .classNameNameNameList.remove("light", "dark");
    document.querySelector("html").classNameNameNameList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div classNameNameNameName="flex flex-wrap min-h-screen items-center">
        <div classNameNameNameName="w-full">
          <div classNameNameNameName="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div classNameNameNameName="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
