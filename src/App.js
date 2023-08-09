import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import LoginPage from "./pages/Login";
import Pagenotfound from "./pages/Pagenotfound";
import CartPage from "./pages/Signedin/CartPage";
import { auth, provider } from "./pages/config";
import { signOut } from "firebase/auth"
import Header from "./components/Layout/Header";
import Headersignout from "./components/Layoutsignedin/Headersignout";
import ProductPage from "./pages/Signedin/ProductPage";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setUserEmail(""); // Clear the user email from state
    setIsAuthenticated(false); // Set the authenticated state to false
    localStorage.removeItem("email"); // Remove the email from local storage
  };
  
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserEmail(storedEmail);
      setIsAuthenticated(true); // Set the initial authentication state from local storage
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Headersignout isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/cart"
            element={
              <CartPage
                userEmail={userEmail} handleSignOut={handleSignOut} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/product/:productid" 
             element={<ProductPage/>}
             />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
