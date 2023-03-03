import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
const Card = styled.div({
  marginTop: "15vh",
  width: "100%",
  position: "relative",
  ":hover": {
    "& >div> img": {
      transform: "scale(1.1)",
    },
  },
});
const Image = styled.img({
  width: "100%",
  transition: "all 0.4s",
});
const ContainerImage = styled.div({
  width: "100%",
  height: "90vh",
  overflow: "hidden",
  marginBottom: "2vh",
});
const ContainerText = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  cursor: "pointer",
});
const Arrow = styled.img({
  width: "4vh",
});
const Tittle = styled.p({
  fontSize: 50,
  color: "white",
  textTransform: "uppercase",
});
const Button = styled.div({
  marginBottom: "10%",
  backgroundColor: "white",
  fontSize: 12,
  cursor: "pointer",
  padding: 10,
});
const data = [
  {
    img: "./assets/13.png",
    tittle: "Men",
  },
  {
    img: "./assets/32.png",
    tittle: "Kids",
  },
  {
    img: "./assets/6.png",
    tittle: "Women",
  },
];
const CategoriesSection = () => {
  return (
    <>
      <Grid container>
        {data.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={4}>
                <Card>
                  <ContainerImage>
                    <Image src={item.img} />
                  </ContainerImage>
                  <ContainerText>
                    <p></p>
                    <Tittle>{item.tittle}</Tittle>
                    <Button>
                      Shop {item.tittle}
                      <Arrow src="./assets/Arrow.png" />
                    </Button>
                  </ContainerText>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default CategoriesSection;
