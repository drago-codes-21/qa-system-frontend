import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import TextQuery from "./components/TextQuery/TextQuery";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MusicQuery from "./components/Music/MusicQuery";
import ImageQuery from "./components/Image/ImageQuery";
import logoImage from "./assets/logoo.jpg";

function App() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={logoImage}
          style={{ height: "100px", width: "100px" }}
        />
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-query" element={<TextQuery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/music" element={<MusicQuery />} />
        <Route path="/image" element={<ImageQuery />} />
      </Routes>
    </div>
  );
}

export default App;
