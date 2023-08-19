import React from 'react'
import { MenuList } from "../../data/data";
import Layoutsignedin from '../../components/Layoutsignedin/Layoutsignedin';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';



const Menusignedin = () => {
  
  const getproductid = (id) => {
    alert(id);
  };
    return (
        <Layoutsignedin>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {MenuList.map((menu) => (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "400px" }}
                    component={"img"}
                    src={menu.image}
                    alt={menu.name}
                  />
                  <CardContent>
                    <Box>
                    <Typography variant="h5" gutterBottom component={"div"} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      {menu.name}
                  <Stack style={{display: "flex", flexDirection: "row"}}>
                  <Link
                  to={`/product/${menu.name}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" style={{ margin: '0 15px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </Stack>
                    </Typography>
              </Box>
                    <Typography variant="body2">{menu.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Layoutsignedin>
      );
    };

export default Menusignedin