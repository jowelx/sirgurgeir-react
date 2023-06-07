import React from "react";
import styled from "@emotion/styled";
import NavBarAbout from "../about/components/NavBarAbout";
import Filter from "./components/Filters";
import { Grid } from "@mui/material";
import Content from "./components/Content";
import BannerOffert from "../../components/BannerOfferts";
import Footer from "../../components/footer/Footer";
const Container = styled.div({
  marginTop: "5vh",
});
const SearchProducts = () => {
  return (
    <>
      <NavBarAbout />
      <Container>
        <Grid container     sx={{
        justifyContent: 'center',  // Valor por defecto
        '@media (min-width: 960px)': {
          justifyContent: 'flex-start',  // Aplica a partir del breakpoint md
        },
      }}>
          <Grid item xs={3} sx={{display:{xs:'none',md:'flex'}}}>
            <Filter />
          </Grid>
          <Grid item xs={8} md={7}>
            <Content />
          </Grid>
        </Grid>
        <br />
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={8}>
            <BannerOffert />
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </>
  );
};
export default SearchProducts;
