import React from "react";
import styled from "@emotion/styled";
import NavBarAbout from "../about/components/NavBarAbout";
import Filter from "./components/Filters";
import { Grid } from "@mui/material";
import Content from "./components/Content";
import BannerOffert from "../../components/BannerOfferts";
import Footer from "../../components/footer/Footer";
import { BLUECOLOR } from "../../colors/Colors";
const Container = styled.div({
});
const Title = styled.p({
  fontWeight: 700,
  fontSize: "5vh",
  color: BLUECOLOR,
  marginBottom:0
});
const WishList = () => {
  return (
    <>
      <NavBarAbout />
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12}>
            <Title>My wishlist</Title>
          </Grid>
          <Grid item xs={11} md={8}>
            <Content />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  );
};
export default WishList;
