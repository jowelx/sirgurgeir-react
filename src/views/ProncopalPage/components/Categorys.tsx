import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image1 from "../../../assets/13.png";
import Image2 from "../../../assets/16.png";
import Image3 from "../../../assets/7.png";
import Image4 from "../../../assets/29.png";
import { ArrowLeft,ArrowRight } from "../../../components/UI/Arrows";
import SwipeableViews from "react-swipeable-views";
import EastIcon from "@mui/icons-material/East";
const data = [
  {
    img: Image1,
    title: "Best Seller",
  },
  {
    img: Image2,
    title: "Shop Men",
  },
  {
    img: Image3,
    title: "Shop Women",
  },
  {
    img: Image4,
    title: "Shop Casual",
  },
];
const Title = styled.p({
  fontSize: "5vh",
  textAlign: "left",
  fontWeight: 600,
});
const Container = styled.div({
  margin: "2vw 0",
});
const Image = styled.img({
  width: "100%",
  opacity: 0.8,
});
const ContainerImage = styled.div({
  position: "relative",
  height: "40vh",
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: 12,
  overflow: "hidden",
});
const Button = styled.div({
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "2vw",
  left: "4vw",
  right: "4vw",
  borderRadius: 6,
  backgroundColor: "white",
  padding: "0.8vw",
  cursor: "pointer",
});
const Arrow = styled(EastIcon)({});
const Category = () => {
  const [index, setIndex] = useState(0);
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
  function handleChangeIndex(index: any) {
    setIndex(index);
  }
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Title>Currated picks</Title>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent={"center"}
            columnSpacing={4}
            rowSpacing={5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {data.map((item, index) => (
              <Grid item xs={8} md={3}>
                <ContainerImage style={{ height: "50vh" }}>
                  <Image src={item.img} />
                  <div>
                    <Button>
                      {item.title}
                      <Arrow />
                    </Button>
                  </div>
                </ContainerImage>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            columnSpacing={4}
            rowSpacing={5}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Grid item xs={12}>
              <SwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                enableMouseEvents={true}
                animateTransitions={true}
                axis={"x"}
                containerStyle={{ height: "auto", width: "100%" }}
              >
                {data.map((item, index) => (
                  <ContainerImage style={{margin:'0 4vh'}}>
                    <Image src={item.img} />
                    <div>
                      <Button>
                        {item.title}
                        <Arrow />
                      </Button>
                    </div>
                  </ContainerImage>
                ))}
              </SwipeableViews>
              <br/>
                          <ArrowLeft onClick={handleBack}/>
                <ArrowRight onClick={handleNext}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Category;
