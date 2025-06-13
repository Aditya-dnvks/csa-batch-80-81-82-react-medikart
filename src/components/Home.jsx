import { Button as B1, Stack, styled, Switch, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Button as B2, TextField } from "@radix-ui/themes";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();
  const { login, isLogin } = useContext(AuthContext);

  // sideEffects - useEffect

  useEffect(() => {
    //  fetch("https://csa-batch79-react.onrender.com/medicalProducts")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log(data)
    //     setData(data)
    //   })
    //   .catch((err) => console.error(err))

    const fetchData = async () => {
      try {
        // const resp = await fetch(
        //   "https://csa-batch79-react.onrender.com/medicalProducts"
        // );
        // const data = await resp.json();
        setLoader(true)
        const response = await axios.get(
          "https://csa-batch79-react.onrender.com/medicalProducts"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }finally{
        setLoader(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-3">
      <h2>Our Products:</h2>
      <div className="w-1/2 m-auto">
        <TextField.Root size="2" placeholder="Search the docs…" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {!loader ? data.map((each,index) => {
          return (
            <div key={each.id}>
              <img src={each.image} />
            </div>
          )
        }) : <div className="mt-10">
          <Spinner /></div>}

      </div>
    </div>
  );
};

export default Home;
