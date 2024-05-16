import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import LandingPage from "./pages/LandingPage";
import Geometri from "./pages/Geometri";
import MainPage from "./pages/MainPage";
import MateriAritmatika from "./pages/MateriAritmatika";
import MateriGeometri from "./pages/MateriGeometri";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<LandingPage />} />
            <Route path="/aritmatika" element={<Project />} />
            <Route path="/geometri" element={<Geometri />} />
            <Route path="materi">
              <Route path="aritmatika" element={<MateriAritmatika />} />
              <Route path="geometri" element={<MateriGeometri />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
