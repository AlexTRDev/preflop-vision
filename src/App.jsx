import { useState } from "react";
import { useEffect } from "react";
import useMatrixStore from "./store/matrixStore";

const App = () => {
  const formatData = useMatrixStore((store) => store.formatData);

  const [theme] = useState(localStorage.getItem("theme") ?? "forest");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [theme]);

  useEffect(() => {
    formatData();
  }, [formatData]);
  return <></>;
};

export default App;
