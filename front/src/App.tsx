import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Search } from "./views/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={Login()}></Route>
      <Route path="register" element={Register()}></Route>
      <Route path="search" element={Search()}></Route>
    </Routes>
  );
}

export default App;
