// "use client"
import React, {useState,useEffect} from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import {auth, provider} from "./config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import CartPage from "./Signedin/CartPage";
import Header from "../components/Layout/Header";
import { useNavigate } from "react-router-dom";
import Headersignout from "../components/Layoutsignedin/Headersignout";
import { getRedirectResult, signInWithRedirect, getAuth } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Get Firebase auth object

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/cartpage"); // Redirect to cart page if the user is already logged in
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userEmail = result.user.email;
        localStorage.setItem("email", userEmail);
        navigate("/cartpage");
      })
      .catch((error) => {
        console.log("Sign-in error:", error);
      });
  };
  return (
    <><Header/><Box
      className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center"
      component="div"
    >
      {/* BOX */}
      <Box
        className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2"
        component="div"
      >
        {/* IMAGE CONTAINER */}
        <Box
          className="relative h-1/3 w-full md:h-full md:w-1/2 "
          component="div"
        >
          <img src="https://res.cloudinary.com/dtrhvhmj8/image/upload/v1691160600/loginBg_prupb8_leff93.jpg" alt="" fill className="object-cover h-full" />
        </Box>
        {/* FORM CONTAINER */}
        <Box className="p-10 flex flex-col gap-8 md:w-1/2" component="div">
          <Typography variant="h4" component="h1" fontWeight="bold">
            Welcome
          </Typography>
          <Typography variant="body1">
            Log into your account or create a new one using social buttons
          </Typography>
          <Button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            variant="contained"
            onClick={handleSignIn}
          >
            <img src="https://res.cloudinary.com/dtrhvhmj8/image/upload/v1691158319/google_tpeezf.png" alt="" width={20} height={20} className="object-contain" />
            <span>Sign in with Google</span>
          </Button>
          <Button
            className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md"
            variant="contained"
          >
            <img src="https://res.cloudinary.com/dtrhvhmj8/image/upload/v1691159091/facebook_it5seq.png" alt="" width={20} height={20} className="object-contain" />
            <span>Sign in with Facebook</span>
          </Button>
          <Typography variant="body2">
            Have a problem?<Link href="/" underline="always"> Contact us</Link>
          </Typography>
        </Box>
      </Box>
    </Box></>
  );
};

export default LoginPage;
