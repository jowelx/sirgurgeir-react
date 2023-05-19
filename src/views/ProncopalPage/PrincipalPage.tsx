import React from "react";
import NavBarAbout from "../about/components/NavBarAbout";
import { Grid } from "@mui/material";
import BannerOffert from "../../components/BannerOfferts";
import Header from "./components/Header";
import Category from "./components/Categorys";
import Products from "./components/Products";
const PrincipalPage = () => {
  return (
    <>
      <NavBarAbout />
      <div style={{ marginTop: "10vw" ,padding:'0 6vw'}}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
                  </Grid>
                  <Grid item xs={12}>
                      <Category/>
                  </Grid>
                  <Grid item xs={12}>
                      <Products/>
                  </Grid>
              </Grid>
              <br/>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12}>
            <BannerOffert />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default PrincipalPage;
