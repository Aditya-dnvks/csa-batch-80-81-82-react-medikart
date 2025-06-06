import { Button, TextField } from "@radix-ui/themes";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  //Controlled Components & unControlled Compoenets
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState(null);

    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.name, e.target.value)
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Form Validations
    const allUsers = JSON.parse(localStorage.getItem("mediUsers")) || [];

    if (
      !formData.name ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.email
    ) {
      setFormError("All Fields are required");
      enqueueSnackbar("All Fields are required", { variant: "error" });
      return;
    }

    const filtredArray = allUsers.filter(
      (each) => each.email === formData.email
    );

    if (filtredArray.length > 0) {
      setFormError("User Already Exists. Use Different Email");
      enqueueSnackbar("User Already Exists. Use Different Email", {
        variant: "error",
      });

      return;
    }

    if (formData.confirmPassword !== formData.password) {
      setFormError("Passwords Doesn't match");
      enqueueSnackbar("Passwords Doesn't match", { variant: "error" });

      return;
    }

    if (formData.password < 6) {
      setFormError("Minimum 6 characters required for the Password");
      enqueueSnackbar("Minimum 6 characters required for the Password", {
        variant: "error",
      });

      return;
    }

    allUsers.push(formData);
    localStorage.setItem("mediUsers", JSON.stringify(allUsers));
    setFormData({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    });
    setFormError("");
    enqueueSnackbar("User Registered Successfully", { variant: "success" });
    
    //Login page redirection
    navigate("/login");
  };

  return (
    <div className="h-screen flex justify-evenly items-center">
      <img src="https://img.freepik.com/free-vector/humanization-concept-illustration_114360-21526.jpg" />
      <form
        className="flex flex-col border border-solid border-gray-400 rounded-xl w-1/4 p-8 space-y-5"
        onSubmit={handleSubmit}
      >
        <h4 className="underline mb-3">Registration Form</h4>
        <TextField.Root
          radius="large"
          placeholder="Full Name"
          style={{ height: 35 }}
          name="name"
          onChange={handleChange}
        />
        <TextField.Root
          radius="large"
          placeholder="Email"
          name="email"
          style={{ height: 35 }}
          onChange={handleChange}
          type="email"
        />
        <TextField.Root
          radius="large"
          placeholder="Password"
          name="password"
          style={{ height: 35 }}
          onChange={handleChange}
          type="password"
        />
        <TextField.Root
          radius="large"
          placeholder="Confirm Password"
          name="confirmPassword"
          style={{ height: 35 }}
          onChange={handleChange}
        />
        {formError && <p className="text-red-600 text-sm">*{formError}</p>}

        <div>
          <Button type="submit">Register</Button>
        </div>
        <p className="m-0">
          Already a Registered User? Login <Link to={"/login"}>here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
