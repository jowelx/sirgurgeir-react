import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image1 from "../../../assets/13.png";
import Image2 from "../../../assets/16.png";
import Image3 from "../../../assets/7.png";
import Image4 from "../../../assets/29.png";
import ArrowIcon from "../../../assets/Arrow.png";

import EastIcon from '@mui/icons-material/East';
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
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
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
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Title>Currated picks</Title>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"} columnSpacing={4} rowSpacing={5}>
            {data.map((item, index) => (
              <Grid item xs={8}md={3}>
                <ContainerImage>
                  <Image src={item.img} />
                  <div>
                    <Button>
                     {item.title}
                      <Arrow  />
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
