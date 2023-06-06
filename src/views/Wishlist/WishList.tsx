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
  marginTop: "10vw",
});
const Title = styled.p({
  fontWeight: 700,
  fontSize: '3.5vw',
  color:BLUECOLOR
})
const WishList = () => {
  return (
    <>
      <NavBarAbout />
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12}>
            <Title>
              My wishlist
</Title>
          </Grid>
          <Grid item xs={8}>
            <Content />
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </>
  );
};
export default WishList;
