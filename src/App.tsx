import Navbar from "./components/Navbar/Navbar";
import ContentCategory from "./components/categoryContent/CategoryContent";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<ContentCategory />} />
      </Routes>
    </>
  );
}

export default App;
