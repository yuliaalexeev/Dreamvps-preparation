import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
