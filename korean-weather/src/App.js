import { useState, useEffect } from "react";
import gridCheck from "./utils/gridCheck";

function App() {
  const [currCoord, setCurrCoord] = useState();
  useEffect(() => {
    setCurrCoord(gridCheck());
  }, []);

  return <div className="App"></div>;
}

export default App;
