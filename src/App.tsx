import Navbar from "./components/Navbar/Navbar";
import ContentCategory from "./components/categoryContent/CategoryContent";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./RequireAuth/RequireAuth";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Login Route */}
        <Route path="login" element={<Login />} />

        {/* Home Route */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Categories Route */}
        <Route element={<RequireAuth />}>
          <Route path="/categories/:category" element={<ContentCategory />} />
        </Route>

        {/* Missing Route */}
        <Route element={<RequireAuth />}>
          <Route path="*" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
