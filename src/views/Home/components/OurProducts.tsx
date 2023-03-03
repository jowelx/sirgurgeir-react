import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const Tittle = styled.h3({
  fontSize: 35,
  textAlign: "left",
  fontWeight: 500,
});
const Card = styled.div({
  width: "100%",
});
const Image = styled.img({
  width: "100%",
  height: "auto",
});
const ContainerImage = styled.div({
  width: "100%",
  height: "61vh",
  overflow: "hidden",
  marginBottom: "2vh",
});
const TittleCard = styled.p({
  fontSize: 20,
  margin: 0,
  textAlign: "left",
});
const Price = styled.p({
  fontSize: 10,
  margin: 0,
  textAlign: "left",
});
const data = [
  {
    img: "./assets/10.png",
    tittle: "Altitude Snow Shell 2.0",
    price: 895,
  },
  {
    img: "./assets/3.jpg",
    tittle: "W Torino Jacket",
    price: 725,
  },
  {
    img: "./assets/13.png",
    tittle: "Stealth Snow",
    price: 695,
  },
  {
    img: "./assets/14.png",
    tittle: "Decent Snow Bib 2.0",
    price: 550,
  },
];
const OurProducts = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Tittle>Our Products</Tittle>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={2}>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} md={3} key={index}>
                  <Card>
                    <ContainerImage>
                      <Image src={item.img} />
                    </ContainerImage>
                    <TittleCard>{item.tittle}</TittleCard>
                    <Price>${item.price}</Price>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default OurProducts;
