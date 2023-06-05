import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import imgLogo from "../../../assets/logo.png";
import IconPerson from "../../../assets/IconPerson.png";
import IconShop from "../../../assets/IconShop.png";
import IconHeart from "../../../assets/IconHeart.png";
import { PrincipalFont } from "../../../fonts/Fonts";
const dataNav = [
  { name: "ABOUT", url: "/about" },
  { name: "MEN", url: "/product" },
  { name: "WOMEN", url: "/product" },
  { name: "EXPLORE", url: "/PrincipalPage" },
  { name: "CONTACT", url: "/contact" },
];
const Logo = styled.img({
  width: "60%",
  height: "auto",
});

const Button = styled.div({
  color: "rgba(0, 23, 48, 1)",
  fontFamily: PrincipalFont,
});
const Container = styled.div({
  position: "absolute",
  left: 0,
  right: 0,
  top: "5vh",
});
const Icon = styled.img({
  width: 25,
  height: 25,
});
const Link = styled.a({
  width: "100%",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const NavBarAbout = () => {
  return (
    <Container>
      <Grid container justifyContent={"space-around"}>
        <Grid item xs={2}>
          <Logo alt="Sirgurgeir" src={imgLogo} />
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            {dataNav.map((item, index) => {
              return (
                <Grid item xs={2}>
                  <Link href={item.url}>
                    <Button key={index}>{item.name}</Button>
                  </Link>
                </Grid>
              );
            })}
            <Grid item xs={2}>
              <Grid container>
                <Grid item xs={4}>
                  <Icon src={IconHeart} />
                </Grid>
                <Grid item xs={4}>
                  <Icon src={IconPerson} />
                </Grid>
                <Grid item xs={4}>
                  <Link href={"cart"}>
                    
                  <Icon src={IconShop} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default NavBarAbout;
