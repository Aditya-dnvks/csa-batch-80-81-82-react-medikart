import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { login,isLogin } = useContext(AuthContext);

  const handleLogOut = () => {
    isLogin(false)
    localStorage.setItem("isLogin", JSON.stringify(false))
  } //JWT 

  return (
    <nav className="bg-black d-flex items-center justify-between px-9 py-1">
      <img
        className="h-14 rounded-full"
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
      />
      <ul className="flex gap-5 m-0 text-white font-bold">
        {login ? (
          <>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>Orders</li>
            <li>About Us</li>
            <li onClick={handleLogOut}>Log out</li>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>

            <Link to={"/register"}>
              <li>Register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
