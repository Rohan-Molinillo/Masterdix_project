import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import MyHistory from "./pages/MyHistory";
import Home from "./pages/Home";
import Reseaux from "./pages/Reseaux";
import Login from "./pages/Login";
import { AuthContext } from "./contexts/ContextAuth";

import "./App.css";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/histoire" element={<MyHistory />} />
        <Route path="/reseaux" element={<Reseaux />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
        >
          <Route
            element={
              auth.role === "admin" ? <Outlet /> : <Navigate to="/login" />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
