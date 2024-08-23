import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [theme] = useState(localStorage.getItem("theme") ?? "forest");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [theme]);
  return <></>;
};

export default App;
