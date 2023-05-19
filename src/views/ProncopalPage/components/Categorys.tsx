import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image1 from "../../../assets/13.png";
import Image2 from "../../../assets/16.png";
import Image3 from "../../../assets/7.png";
import Image4 from "../../../assets/29.png";
import ArrowIcon from "../../../assets/Arrow.png";
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
  fontSize: "2.5vw",
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
  height: "22vw",
  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: 12,
  overflow: "hidden",
});
const Button = styled.div({
  zIndex: 9999,
  position: "absolute",
  bottom: "2vw",
  left: "4vw",
  right: "4vw",
  borderRadius: 6,
  backgroundColor: "white",
  padding: "0.8vw",
  cursor: "pointer",
});
const Arrow = styled.img({});
const Category = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Title>Currated picks</Title>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            {data.map((item, index) => (
              <Grid item xs={3}>
                <ContainerImage>
                  <Image src={item.img} />
                  <div>
                    <Button>
                      Grab it now
                      <Arrow src={ArrowIcon} />
                    </Button>
                  </div>
                </ContainerImage>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Category;
