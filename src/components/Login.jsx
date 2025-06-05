import { Button, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Login = () => {


  


  return (
    <div className="h-screen flex justify-evenly items-center">
      <img src="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" />
      <form className="flex flex-col border border-solid border-gray-400 rounded-xl w-1/4 p-8 space-y-5">
        <h4 className="underline mb-3">Login Form</h4>
        <TextField.Root
          radius="large"
          placeholder="Email"
          style={{ height: 35 }}
        />
        <TextField.Root
          radius="large"
          placeholder="Password"
          style={{ height: 35 }}
        />
        <div>
          <Button>Login</Button>
        </div>
        <p className="m-0">
          Not a Regsitered user? Register <Link to={"/register"}>here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
