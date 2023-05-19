import React from "react";
import styled from "@emotion/styled";
import NavBarAbout from "../about/components/NavBarAbout";
import Filter from "./components/Filters";
import { Grid } from "@mui/material";
import Content from "./components/Content";
import BannerOffert from "../../components/BannerOfferts";
import Footer from "../../components/footer/Footer";
const Container = styled.div({
  marginTop: "10vw",
});
const SearchProducts = () => {
  return (
    <>
      <NavBarAbout />
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Filter />
          </Grid>
          <Grid item xs={6}>
            <Content />
          </Grid>
        </Grid>
        <br />
        <Grid container justifyContent={"center"}>
          <Grid item xs={8}>
            <BannerOffert />
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </>
  );
};
export default SearchProducts;
