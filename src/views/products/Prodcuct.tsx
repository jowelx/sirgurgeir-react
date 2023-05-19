import React from "react";
import ViewProducts from "./components/ViewProduct";
import NavBarAbout from "../about/components/NavBarAbout";
import { Grid } from "@mui/material";
import DetailProduct from "./components/detailProduct";
import Comments from "./components/Comments";
import Description from "./components/Desciption";
import Offert from "./components/Offert";
const Product = () => {
  return (
    <>
      <NavBarAbout />
      <Offert/>
      <div style={{ marginTop: "12vw" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ViewProducts />
          </Grid>
          <Grid item xs={12} md={6}>
            <DetailProduct />
          </Grid>
          <Grid md={6}><Comments/></Grid>
          <Grid md={4}><Description/></Grid>
        </Grid>
      </div>
    </>
  );
};
export default Product;
