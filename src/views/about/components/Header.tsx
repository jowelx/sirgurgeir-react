import React from "react";
import styled from "@emotion/styled";
import image from "../../../assets/1.jpg";
import ArrowDown from "../../../assets/ArrowDown.png";
import { Grid } from "@mui/material";
import { PrincipalFont } from "../../../fonts/Fonts";
const Icon = styled.img({
  width: 18,
  height: 26,
  borderRadius: 100,
});
const ContainerIcon = styled.div({
  padding: "0.6vh",
  border: "solid 2px white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 400,
  width: 40,
  height: 40,
  marginTop: "2vh",
});
const ImageBackground = styled.div({
  width: "100%",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover" /* Ajusta el tamaño de la imagen al div */,
  backgroundPosition: "center" /* Centra la imagen en el div */,
  height: "100vh",
});
const ShadowContent = styled.div({
  height: "100%",
  background:
    " linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(50,50,50,0.5), rgba(0,0,0,0.4))",
});
const Title = styled.p({
  margin: 0,
  fontFamily: PrincipalFont,
  fontWeight: 700,
  lineHeight: "5vh",
  color: "white",
  fontSize: "5vh",
  textAlign: "left",
  borderBottom: "solid 2px rgb(255,255,255)",
  marginTop: "1vh",
});
const Text = styled.p({
  fontFamily: PrincipalFont,
  textAlign: "justify",
  fontSize: "2.5vh",
  color: "white",
});
const ContainerText = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "8vh",
});

const Header = () => {
  return (
    <>
      <ImageBackground>
        <ShadowContent>
          <ContainerText>
            <Grid container>
              <Grid item xs={11}>
                <Title>
                  The best collection of
                  <br /> chairs is here
                </Title>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}md={11}>
                <Text>
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac <br />
                  aliquet odio mattis. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos <br /> himenaeos.
                </Text>
              </Grid>
              <Grid item xs={12}md={1}>
                <ContainerIcon>
                  <Icon src={ArrowDown} />
                </ContainerIcon>
              </Grid>
            </Grid>
          </ContainerText>
        </ShadowContent>
      </ImageBackground>
    </>
  );
};
export default Header;
