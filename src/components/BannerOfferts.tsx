import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Banner from "../assets/baners.png";
import { BLUECOLOR } from "../colors/Colors";
import ArrowIcon from "../assets/Arrow.png";
import EastIcon from '@mui/icons-material/East';
const Container = styled.div({
  borderRadius: 12,
  marginBottom: "5vw",
  backgroundColor: BLUECOLOR,
});
const Image = styled.img({
  width: "auto",
  height: "100%",
});
const ContainerImage = styled.div({
  width: "100%",
  height: "100%",
  overflow: "hidden",
});
const BlueContainer = styled.div({
  padding: "4vw",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
});
const Button = styled.div({
  borderRadius: 6,
  backgroundColor: "white",
  padding: "0.8vw",
  display: 'flex',
  justifyContent:'space-around',
  alignItems:'center'
});
const Text = styled.p({
  color: "white",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "2.5vw",
});
const LittleTitle = styled.p({
  color: "white",
  textAlign: "left",
  margin: 0,
  fontWeight: 400,
});
const Arrow = styled(EastIcon)({
  marginLeft:'1vw'
});

const BannerOffert = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <ContainerImage>
            <Image src={Banner} />
          </ContainerImage>
        </Grid>
        <Grid item xs={8}>
          <BlueContainer>
            <LittleTitle>LIMITED OFFER</LittleTitle>
            <Text>35% off only this friday and get special gift</Text>
            <Button>
              Grab it now
              <Arrow />
            </Button>
          </BlueContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
export default BannerOffert;