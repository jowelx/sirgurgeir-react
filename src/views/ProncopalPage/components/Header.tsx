import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ArrowIcon from "../../../assets/ArrowWhite.png";
import { BLUECOLOR } from "../../../colors/Colors";
import image from "../../../assets/2.png";
import { ArrowLeft,ArrowRight } from "../../../components/UI/Arrows";
import SwipeableViews from "react-swipeable-views";
const data = [
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const H1 = styled.p({
  color: "black",
  marginBottom: 0,
  fontSize: "8vh",
  textAlign: "left",
  fontWeight: 600,
  lineHeight: 1,
});
const H2 = styled.p({
  color: "black",
  fontSize: "3vh",
  marginBottom: "0.5vw",
  textAlign: "left",
});
const H3 = styled.p({
  color: "#5E5E5E",
  fontSize: "1.8vh",
  textAlign: "left",
});
const H4 = styled.p({
  fontSize: "2.4vh",
  color: "#5E5E5E",
  textAlign: "left",
  lineHeight: 1.4,
  marginTop: "0.2vw",
});
const Button = styled.div({
  width: "20vh",
  borderRadius: 6,
  backgroundColor: BLUECOLOR,
  padding: "1.6vh",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});
const Arrow = styled.img({
  width: "2vw",
});
const Image = styled.img({
  height: "100%",
});
const Header = () => {
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
      <div>
        <Grid container rowSpacing={5}>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <H1>
                  Level up your style
                  <br />
                  with our summer <br />
                  collections
                </H1>
              </Grid>
              <Grid item xs={12}>
                <H4>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate
                  <br /> libero et velit interdum, ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad <br />
                  litora torquent per conubia nostra, per inceptos himenaeos.
                </H4>
              </Grid>
              <Grid item xs={12}>
                <br />
                <Button>
                  Shop Now
                  <Arrow src={ArrowIcon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ width: "auto", overflow: "hidden", height: "75vh" }}>
              <Image src={image} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <H2 style={{ fontWeight: 600 }}>
              We provide best
              <br /> customer experiences
            </H2>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                padding: "0.5vw",
                borderLeft: `solid 2px ${BLUECOLOR}`,
                paddingLeft: "1vw",
              }}
            >
              <H3>
                We ensure our customers have the best shopping
                <br /> experience
              </H3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"space-around"}
              columnSpacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {data.map((item, index) => (
                <Grid key={index} item xs={12} md={3}>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "10vh",
                        height: "10vh",
                        borderRadius: 12,
                        backgroundColor: "rgba(235, 235, 235, 1)",
                      }}
                    />
                    <H2 style={{ color: BLUECOLOR, fontWeight: 600 }}>
                      {item.title}
                    </H2>
                    <H4>{item.text}</H4>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              justifyContent={"space-around"}
              columnSpacing={2}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Grid item xs={12} md={3}>
                <SwipeableViews
                  index={index}
                  onChangeIndex={handleChangeIndex}
                  enableMouseEvents={true}
                  animateTransitions={true}
                  axis={"x"}
                  containerStyle={{ height: "auto", width: "100%" }}
                >
                  {data.map((item, index) => (
                    <div key={index} style={{ width: "100%" }}>
                      <div
                        style={{
                          width: "10vh",
                          height: "10vh",
                          borderRadius: 12,
                          backgroundColor: "rgba(235, 235, 235, 1)",
                        }}
                      />
                      <H2 style={{ color: BLUECOLOR, fontWeight: 600 }}>
                        {item.title}
                      </H2>
                      <H4>{item.text}</H4>
                    </div>
                  ))}
                </SwipeableViews>
                 <br/>
                <ArrowLeft onClick={handleBack}/>
                <ArrowRight onClick={handleNext}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Header;
