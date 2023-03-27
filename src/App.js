import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import TextQuery from "./components/TextQuery/TextQuery";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MusicQuery from "./components/Music/MusicQuery";
import ImageQuery from "./components/Image/ImageQuery";

function App() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontWeight: "bolder",
            padding: "3px",
            fontSize: "30px",
          }}
        >
          QAS
        </span>
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
