import { Button as B1, Stack, styled, Switch, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Button as B2 } from "@radix-ui/themes";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [darkMode, toggleMode] = useState(false);
  const [APIdata, setAPIData] =  useState([])
  const [loader, setLoader] = useState(false)
  const navigation = useNavigate();

  const handleDarkMode = () => {
    toggleMode(!darkMode);
  };

  const handleNavigation = (e) => {
    //Code
    navigation("/123");
  };

  const {login, isLogin} = useContext(AuthContext)


  // sideEffects - useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true)
        // const data = await fetch("https://fakestoreapi.com/products");
        // const response = await data.json();
        // C - Create - POST 
        // R - Read - GET 
        // U - Update - PUT 
        // D - Delete - DELETE

        const response = await axios.get("https://fakestoreapi.com/products");
        setAPIData(response.data)
      } catch (err) {
        console.log(err);
      }finally{
        setLoader(false)
      }
    };

    fetchData();
  }, []); //componentDidMount

  return (
    <div
      className={`flex flex-col text-center justify-center items-center h-screen 
    ${darkMode ? "bg-black" : "bg-white"}
    ${darkMode && "text-white"}`}
    >
      {!loader? 
      APIdata.map((each,index) => <div key={each.id}>Product No {index + 1}</div>) : 
      <p className="text-red-900 text-lg">Loading</p>
      }

      {/* <Switch {...label} defaultChecked />  */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center" }}
        onClick={handleDarkMode}
      >
        <Typography>Off</Typography>
        <AntSwitch
          checked={darkMode}
          inputProps={{ "aria-label": "ant design" }}
        />
        <Typography>On</Typography>
      </Stack>
      {/* <button onClick={handleDarkMode}>Dark Mode</button> */}
      <div>
        <h1>Welcome to Career Sure Academy</h1>
      </div>
      <B1 variant="contained" onClick={() => isLogin(!login)}>MUI</B1>
      <a href="/123">To Dummy</a>
      <Link to={"/123"}>To Dummy</Link>
      <B2 variant="solid" style={{ margin: 10 }} onClick={handleNavigation}>
        Get started
      </B2>
    </div>
  );
};

export default Home;

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));
