import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MonHistoire from "./pages/MonHistoire";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hisoire" element={<MonHistoire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
