import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dummy from "./components/Dummy";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Dynamic from "./components/Dynamic";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { login } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {login ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/123" element={<Dummy />} />
            <Route path="/:classroom-id/student/:id" element={<Dynamic />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//React Router DOM

// React Booststrap
// Radix UI
// Material UI

//Global State management --> React Context, Redux
