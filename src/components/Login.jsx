import { Button, TextField } from "@radix-ui/themes";
import { enqueueSnackbar } from "notistack";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const { isLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Form Validations
    const allUsers = JSON.parse(localStorage.getItem("mediUsers")) || [];
    const filtredArray = allUsers.filter(
      (each) => each.email === formData.email
    );

    if (!formData.password || !formData.email) {
      setFormError("All Fields are required");
      enqueueSnackbar("All Fields are required", { variant: "error" });
      return;
    }

    if (filtredArray.length === 0) {
      setFormError("User Doesn't Exist. Please Register");
      enqueueSnackbar("User Doesn't Exist. Please Register", {
        variant: "error",
      });

      return;
    }

    if (formData.password < 6) {
      setFormError("Minimum 6 characters required for the Password");
      enqueueSnackbar("Minimum 6 characters required for the Password", {
        variant: "error",
      });

      return;
    }

    if (filtredArray[0].password !== formData.password) {
      setFormError("Incorrect Password");
      enqueueSnackbar("Incorrect Password", {
        variant: "error",
      });

      return;
    }

    setFormData({
      email: "",
      password: "",
    });
    setFormError("");
    enqueueSnackbar("User Login Successfully", { variant: "success" });

    isLogin(true)
    localStorage.setItem("isLogin", JSON.stringify(true))
    //Home page redirection
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-evenly items-center">
      <img src="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" />
      <form
        className="flex flex-col border border-solid border-gray-400 rounded-xl w-1/4 p-8 space-y-5"
        onSubmit={handleSubmit}
      >
        <h4 className="underline mb-3">Login Form</h4>
        <TextField.Root
          radius="large"
          placeholder="Email"
          style={{ height: 35 }}
          onChange={handleChange}
          name="email"
        />
        <TextField.Root
          radius="large"
          placeholder="Password"
          style={{ height: 35 }}
          onChange={handleChange}
          name="password"
        />
        {formError && <p className="text-red-600 text-sm">*{formError}</p>}

        <div>
          <Button type="submit">Login</Button>
        </div>
        <p className="m-0">
          Not a Regsitered user? Register <span  className="underline text-blue-600"><Link to={"/register"}>here</Link></span> 
        </p>
      </form>
    </div>
  );
};

export default Login;
