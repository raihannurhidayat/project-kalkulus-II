import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import LandingPage from "./pages/LandingPage";
import Geometri from "./pages/Geometri";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<LandingPage />} />
            <Route path="/aritmatika" element={<Project />} />
            <Route path="/geometri" element={<Geometri />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
