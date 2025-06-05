import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  //Controlled Components & unControlled Compoenets
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted",formData)
    //Validations
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
