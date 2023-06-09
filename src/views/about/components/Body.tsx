import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { PrincipalFont } from "../../../fonts/Fonts";
import { BLUECOLOR, YELLOWCOLOR } from "../../../colors/Colors";
import Person from "../../../assets/personBlue.png";
import { Divider } from "@mui/material";
import ComillasIcon from "../../../assets/Comillas.png";
import { ArrowLeft,ArrowRight } from "../../../components/UI/Arrows";
import SwipeableViews from "react-swipeable-views";
const Container = styled.div({
  marginTop: "20vh",
});
const BlueTittle = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "11.5vh",
  fontWeight: 700,
  margin: 0,
  lineHeight: "10vh",
  display: "inline-block",
});
const YellowTittle = styled.p({
  fontFamily: PrincipalFont,
  color: YELLOWCOLOR,
  fontSize: "11.5vh",
  fontWeight: 700,
  margin: 0,
  display: "inline-block",
});
const Text = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "3vh",
  marginBottom: "0.1vw",
});
const SubText = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "1.8vh",
  marginTop: ".1vw",
});
const PersonIcon = styled.img({
  width: 30,
});
const ContainerIconPerson = styled.div({
  width: 50,
  height: 50,
  borderRadius: "100%",
  border: `solid 2px ${YELLOWCOLOR}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const data = [0, 1, 2];
const LastData = [
  {
    profesion: "Comedic Actor",
    name: "Will Rogers",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    profesion: "Industrialist & philanthropist",
    name: "Andrew Carnegie",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    profesion: "British philosopher",
    name: "John Stuart Mill",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

const Body = () => {
  const [index, setIndex] = useState(0);
  function handleChangeIndex(index: number) {
    setIndex(index);
  }
  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleBack = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  return (
    <>
      <Grid container justifyContent={"center"} style={{ marginTop: "8vh" }}>
        <Grid item xs={12}>
          <BlueTittle>About</BlueTittle>
        </Grid>
        <Grid item xs={10} >
          <Text style={{ marginBottom: "4vw" }}>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid
            container
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Grid item xs={12}>
              <YellowTittle>Why&nbsp;</YellowTittle>
              <BlueTittle>should</BlueTittle>
              <br />
              <BlueTittle>choose&nbsp;</BlueTittle>
              <YellowTittle>our</YellowTittle>
            </Grid>
            <Grid item xs={11}>
              <BlueTittle style={{ textAlign: "left" }}>
                product?&nbsp;&nbsp;
              </BlueTittle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: "flex", md: "none" } }}>
          <Grid
            container
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Grid item xs={12}>
              <YellowTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>Why&nbsp;</YellowTittle>
              <BlueTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>should</BlueTittle>
              <br />
              <BlueTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>choose&nbsp;</BlueTittle>
              <YellowTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>our</YellowTittle>
            </Grid>
            <Grid item xs={11}>
              <BlueTittle style={{ fontSize: "6vh", textAlign: "left",lineHeight:'6vh' }}>
                product?&nbsp;&nbsp;
              </BlueTittle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container justifyContent={"center"}>
            {data.map((item) => (
              <Grid key={item} item xs={11} md={10}>
                <Grid container alignItems={"center"}>
                  <Grid item xs={2}>
                    <ContainerIconPerson>
                      <PersonIcon src={Person} />
                    </ContainerIconPerson>
                  </Grid>
                  <Grid item xs={10}>
                    <Text style={{ textAlign: "left", width: "100%" }}>
                      Lorem ipsum dolor sit amet
                    </Text>
                    <SubText style={{ textAlign: "left", width: "100%" }}>
                      Worem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </SubText>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
          <Container style={{marginTop:'1vh'}}>
            <BlueTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>What our happy</BlueTittle>
            <br />
            <BlueTittle style={{ fontSize: "6vh",lineHeight:'6vh' }}>customers say</BlueTittle>
          </Container>
        </Grid>
        <Grid
          item
          md={12}
          style={{ width: "100%" }}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Container>
                <BlueTittle style={{ fontSize: "10vh" }}>
                  What our happy
                </BlueTittle>
                <br />
                <BlueTittle style={{ fontSize: "10vh" }}>
                  customers say
                </BlueTittle>
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid container style={{ marginTop: "4vw" }}>
            {LastData.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Grid container>
                  <Grid item xs={4} md={2}>
                    <ContainerIconPerson style={{ border: 0 }}>
                      <PersonIcon src={ComillasIcon} />
                    </ContainerIconPerson>
                  </Grid>
                  <Grid item xs={11}>
                    <Text style={{ textAlign: "justify" }}>{item.text}</Text>
                    <Divider />
                  </Grid>
                  <Grid item xs={11}>
                    <Text style={{ textAlign: "left" }}>{item.name}</Text>
                    <SubText style={{ textAlign: "left" }}>
                      {item.profesion}
                    </SubText>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={10} sx={{ display: { xs: "flex", md: "none" } }}>
          <Grid container style={{ marginTop: "4vw" }}>
            <SwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents={true}
              animateTransitions={true}
              axis={"x"}
              containerStyle={{ height: "auto", width: "100%" }}
            >
              {LastData.map((item, index) => (
                <Grid container>
                  <Grid item xs={4} md={2}>
                    <ContainerIconPerson style={{ border: 0 }}>
                      <PersonIcon src={ComillasIcon} />
                    </ContainerIconPerson>
                  </Grid>
                  <Grid item xs={11}>
                    <Text style={{ textAlign: "justify" }}>{item.text}</Text>
                    <Divider />
                  </Grid>
                  <Grid item xs={11}>
                    <Text style={{ textAlign: "left" }}>{item.name}</Text>
                    <SubText style={{ textAlign: "left" }}>
                      {item.profesion}
                    </SubText>
                  </Grid>
                </Grid>
              ))}
            </SwipeableViews>
          </Grid>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={2}>
          <div
            style={{
              marginTop: "5vw",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ArrowLeft onClick={handleBack} />
            <ArrowRight onClick={handleNext} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Body;
