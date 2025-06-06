import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  if(!login){
    return null;
  }

  return (
    <div className="card">
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png"
        className="h-screen"
      />
    </div>
  );
};

export default NotFound;
