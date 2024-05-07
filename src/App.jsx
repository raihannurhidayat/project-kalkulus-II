
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aritmatika" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
