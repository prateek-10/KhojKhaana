import React, { useRef } from "react"; 
import { MenuList } from "../../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Menusignedin from "./Menusignedin"; 
import {TypeOfFood } from "./TypeOfFood"

const styles = {
  card: {
    maxWidth: "250px",
    display: "flex",
    m: 2,
    mt: 10,
    transition: "transform 0.3s, box-shadow 0.3s", // Add transition properties
    "&:hover": {
      transform: "translateY(-20px)",
      boxShadow: "rgb(72, 111, 253) 0px 0px 20px 2px",
    },
  },
};

const CartPage = ({ userEmail }) => {
  const auth = getAuth(); // Get Firebase auth object

  return (
    <div>
       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {TypeOfFood.map((menu) => (
              <Card sx={styles.card} key={menu.name}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "375px" }}
                    component={"img"}
                    src={menu.image}
                    alt={menu.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"} textAlign="center">
                      {menu.name}
                    </Typography>
                    {/* <Typography variant="body2">{menu.description}</Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
      <Menusignedin/>
    </div>
  );
};

export default CartPage;
