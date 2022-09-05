import axios from "axios";
import { useState, useEffect } from "react";
import browseWeather from "./utils/browseWeather";
import gridCheck from "./utils/gridCheck";

function App() {
  const testApi = async () => {
    axios.get("api").then((res) => console.log(res.data.test));
  };

  const [currCoord, setCurrCoord] = useState();
  useEffect(() => {
    setCurrCoord(gridCheck());
    testApi();
  }, []);

  return <div className="App"></div>;
}

export default App;
