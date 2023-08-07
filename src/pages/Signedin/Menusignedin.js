import React from 'react'
import { MenuList } from "../../data/data";
import Layoutsignedin from '../../components/Layoutsignedin/Layoutsignedin';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const Menusignedin = () => {
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
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
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