import React from "react";
import ViewProducts from "./components/ViewProduct";
import NavBarAbout from "../about/components/NavBarAbout";
import { Grid } from "@mui/material";
import DetailProduct from "./components/detailProduct";
import Comments from "./components/Comments";
import Description from "./components/Desciption";
import Offert from "./components/Offert";
import Footer from "../../components/footer/Footer";
const Product = () => {
  return (
    <>
      <NavBarAbout />
      <Offert />
      <div style={{ marginTop: "1vh" }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} md={6}>
            <ViewProducts />
          </Grid>
          <Grid item xs={12} md={5}>
            <DetailProduct />
          </Grid>
          <Grid xs={12} md={6}>
            <Comments />
          </Grid>
          <Grid xs={12} md={5}>
            <Description />
          </Grid>
          <Grid md={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Product;
