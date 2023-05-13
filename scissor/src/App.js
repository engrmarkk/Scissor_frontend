import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Route, Routes
} from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Write from "./write";
import Register from "./register";

function App() {
  return (
      <div className="app-container">
        <Home />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Write/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
  );
}

export default App;
