import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import imgLogo from "../../../assets/logo.png";
import IconPerson from '../../../assets/IconPerson.png'
import IconShop from '../../../assets/IconShop.png'
import IconHeart from '../../../assets/IconHeart.png'
import { PrincipalFont } from "../../../fonts/Fonts";
const dataNav = ["Quorem", "Quorem", "Quorem", "Quorem"];
const Logo = styled.img({
  width: "60%",
  height: "auto",
});

const Button = styled.div({
  color: "rgba(0, 23, 48, 1)",
  fontFamily:PrincipalFont 
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
                  <Button key={index}>{item}</Button>
                </Grid>
              );
            })}
            <Grid item xs={4}>
              <Grid container>
                  <Grid item xs={4}>
                         <Icon src={IconHeart}/> 
                      </Grid>
                                <Grid item xs={4}>
                         <Icon src={IconPerson}/> 
                      </Grid>
                                     <Grid item xs={4}>
                         <Icon src={IconShop}/> 
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
