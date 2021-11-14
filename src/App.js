import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/HomePage/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import Register from "./components/LoginPage/Register/Register";
import Nomatch from "./components/Nomatch/Nomatch";
export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Nomatch />}></Route>
    </Routes>
    </UserContext.Provider>
  );
}

export default App;
