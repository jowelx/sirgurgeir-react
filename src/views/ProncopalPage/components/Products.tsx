import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { data } from "../../SearchProducts/components/DataProducts";
import ProductCard from "../../../components/UI/ProductCard";
import EastIcon from '@mui/icons-material/East';
import ArrowIcon from "../../../assets/ProductArrow.png";
import { BLUECOLOR } from "../../../colors/Colors";
const Title = styled.p({
  fontSize: "2.5vw",
  textAlign: "left",
  fontWeight: 600,
});
const Container = styled.div({
  margin: "2vw 0",
});
const ArrowLeft = styled(EastIcon)({
  padding: "1.5vh",
  borderRadius: 200,
  border: `solid 1px ${BLUECOLOR}`,
  backgroundColor: 'rgba(0,0,0,0)',
  color:BLUECOLOR,
  cursor: "pointer",
  transform: "rotate(180deg)",
  transition: "0.2s ease",
  "&:hover": {
    color: "white",
      backgroundColor: BLUECOLOR,
  },
});
const ArrowRight = styled(EastIcon)({
  padding: "1.5vh",
  borderRadius: 200,
  border:`solid 1px ${BLUECOLOR}`,
  backgroundColor: 'rgba(0,0,0,0)',
  cursor: "pointer",
  color:BLUECOLOR,
  transition: "all 0.2s ease",
  "&:hover": {
    color: "white",
      backgroundColor: BLUECOLOR,
  },
});
const Products = () => {
  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Title>Currated Picks</Title>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={10}>
            {data.map((item, index) => (
             index <=3&& <Grid key={index} item xs={3}>
                <ProductCard
                  xl
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  sale={item.sale}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "5vw",
            }}
          >
            <ArrowLeft />
            <ArrowRight/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Products;
