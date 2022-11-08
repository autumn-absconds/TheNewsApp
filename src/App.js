
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {


  return (
    <>
    <Navbar />
      <Routes>

        <Route exact path="/" element={<News key="news" topic={"news"} country={"in" }/>} ></Route>
        {/* <Route exact path="/sport" element={<News key="sport" topic="sport" country="in" />} ></Route>
        <Route exact path="/tech" element={<News key="tech" topic="tech" country="in" />} ></Route>
        <Route exact path="/world" element={<News key="world" topic="world" country="in" />} ></Route>
        <Route exact path="/finance" element={<News key="finance" topic="finance" country="in" />} ></Route>
        <Route exact path="/politics" element={<News key="politics" topic="politics" country="in" />} ></Route>
        <Route exact path="/business" element={<News key="business" topic="business" country="in" />} ></Route>
        <Route exact path="/economics" element={<News key="economics" topic="economics" country="in" />} ></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" topic="entertainment" country="in" />} ></Route>
        <Route exact path="/beauty" element={<News key="beauty" topic="beauty" country="in" />} ></Route>
        <Route exact path="/travel" element={<News key="travel" topic="travel" country="in" />} ></Route>
        <Route exact path="/music" element={<News key="music" topic="music" country="in" />} ></Route>
        <Route exact path="/food" element={<News key="food" topic="food" country="in" />} ></Route>
        <Route exact path="/science" element={<News key="science" topic="science" country="in" />} ></Route> */}

      </Routes>
    </>
  );
}

export default App;
