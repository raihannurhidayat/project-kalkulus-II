import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import LandingPage from "./pages/LandingPage";
import Geometri from "./pages/Geometri";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aritmatika" element={<Project />} />
          <Route path="/geometri" element={<Geometri />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
