import React from "react";
import styled from "@emotion/styled";
import Heart from "../../assets/IconHeart.png";
import IconCart from "../../assets/IconCart.png";
import { Grid, Paper } from "@mui/material";
type Prop = {
  name: string;
  img: string;
  price: string;
  sale: boolean | undefined;
  xl?: boolean | undefined | null;
};
const Sale = styled.p({
  position: "absolute",
  backgroundColor: "red",
  top: 0,
  left: 0,
  fontSize: "1.8vh",
  color: "white",
  padding: "0.5vw 1vw",
});
const Icon = styled.img({
  height: "4vh",
  width: "4vh",
});
const Container = styled.div({
  width: "100%",
  minHeight: "10vh",
  borderRadius: 5,
});
const ContainerImage = styled.div({
  overflow: "hidden",
  position: "relative",
});
const Image = styled.img({
  width: "100%",
  height: "auto",
});

const ContainerIcon = styled.div({
  position: "absolute",
  top: "0.5vw",
  right: "0.5vw",
});
const Name = styled.p({
  margin: 0,
  fontSize: "2.5vh",
  textAlign: "left",
});
const Price = styled.p({
  margin: 0,
  fontSize: "2vh",
  fontWeight: 600,
  textAlign: "left",
});
const ContainerData = styled.div({
  margin: "1vw 0vw",
  padding: "0.5vw 0.5vw",
  marginTop:'0.1vw'
});
const ProductCard = ({ xl, name, img, price, sale }: Prop) => {
  return (
    <a href="/product" style={{textDecoration: "none"}}>
    <Paper elevation={3}>
        <Container>
          <Grid container sx={{display:{xs:'none',md:'flex'}}}>
            <Grid item xs={12}>
                     <ContainerImage style={{ height: xl ? "40vh" : "30vh" }}>
          <Image src={img} />
          <ContainerIcon>
            <Icon src={Heart} />
          </ContainerIcon>
          {sale && <Sale>SALE</Sale>}
        </ContainerImage>
        <ContainerData>
          <Grid container>
            <Grid item xs={10}>
              <Name>{name}</Name>
              <Price>${price}</Price>
            </Grid>
            <Grid item xs={2}>
              <Icon src={IconCart} />
            </Grid>
          </Grid>
        </ContainerData> 
</Grid>
          </Grid>
          <Grid container sx={{display:{xs:'flex',md:'none'}}}>
            <Grid item xs={12}>
                     <ContainerImage style={{ height: xl ? "20vh" : "20vh" }}>
          <Image src={img} />
          <ContainerIcon>
            <Icon src={Heart} />
          </ContainerIcon>
          {sale && <Sale>SALE</Sale>}
        </ContainerImage>
        <ContainerData>
          <Grid container alignItems={"center"}>
            <Grid item xs={10}>
              <Name style={{fontSize:'2vh'}}>{name}</Name>
              <Price>${price}</Price>
            </Grid>
            <Grid item xs={2}>
              <Icon style={{  height: "3vh",
  width: "3vh",}} src={IconCart} />
            </Grid>
          </Grid>
        </ContainerData> 
</Grid>
          </Grid>

      </Container>
    </Paper>
    </a>

  );
};
export default ProductCard;
