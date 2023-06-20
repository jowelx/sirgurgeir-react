import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Heart from "../../assets/IconHeart.png";
import IconCart from "../../assets/IconCart.png";
import { Grid, Paper } from "@mui/material";
import { BLUECOLOR } from "../../colors/Colors";
import { AppContext } from "../../context/AppContext";
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
  '&:hover .ContainerAddCart': {
    opacity:1
  }
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
  margin: "0.8vh 0vw",
  padding: "0.5vw 0.5vw",
  marginTop: "0.1vw",
});
const ColorsContainer = styled.div({
  width: "100%",
  marginTop: "1.5vh",
  display: "flex",

  flexDirection: "row",
});
const Color = styled.div({
  height: "2.2vh",
  width: "2.2vh",
  margin: "0 0.2vh",
  padding: "0.1vh",
  borderRadius: 10,
  cursor: "pointer",
  boxShadow: "0 1px 2px 0 rgb(100,100,100)",
});
const ContainerAddCart = styled.div({
  position: "absolute",
  width: "94%",
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: "1vh",
  top: 0,
  transition:'all 0.2s ease',
  opacity:0,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const colors = ["rgb(180,250,252)", "rgb(210,200,220)", "rgb(250,150,182)"];
const ProductCard = ({ xl, name, img, price, sale }: Prop) => {
  const [colorSelected, setColorSelected] = useState(0);
  const {productsCount,setProductsCount}=useContext(AppContext)
  return (
    <Paper elevation={3}>
      <Container>
        <Grid container sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid item xs={12}>

              <ContainerImage style={{ height: xl ? "40vh" : "30vh" }}>
                <Image src={img} />
                <ContainerIcon>
                  <Icon src={Heart} />
                </ContainerIcon>
                {sale && <Sale>SALE</Sale>}
                <ContainerAddCart
                className="ContainerAddCart"
                >
                <div
                  onClick={()=>setProductsCount(productsCount+1)}
                  style={{
                      cursor:'pointer',
                      width:'70%',
                      display: "flex",
                      alignItems: 'center',
                      justifyContent:'space-between',
                      flexDirection: "row",
                      backgroundColor: "white",
                      padding: "1vh",
                      borderRadius: 4,
                      color:BLUECOLOR
                    }}
                  >
                    <Name style={{fontSize:'2vh'}}>Add to cart</Name>
                    <Icon src={IconCart} />
                  </div>
                </ContainerAddCart>
              </ContainerImage>
   

            <ContainerData>
              <Grid container>
                <Grid item xs={10}>
                  <a
                    href="/product"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Name>{name}</Name>
                  </a>

                  <ColorsContainer>
                    {colors.map((c, index) => (
                      <Color
                        onClick={() => setColorSelected(index)}
                        key={index}
                        style={{
                          backgroundColor: c,
                          border: `solid 1px ${
                            colorSelected === index
                              ? "rgb(50,50,50)"
                              : "rgba(0,0,0,0)"
                          }`,
                        }}
                      />
                    ))}
                  </ColorsContainer>
                </Grid>
                <Grid item xs={2}>
                  <a href="/product" style={{ textDecoration: "none" ,color:BLUECOLOR}}>
                                        <Price>${price}</Price>
                  </a>
                </Grid>
              </Grid>
            </ContainerData>
          </Grid>
        </Grid>
        <Grid container sx={{ display: { xs: "flex", md: "none" } }}>
          <Grid item xs={12}>
            <a href="/product" style={{ textDecoration: "none" }}>
              <ContainerImage style={{ height: xl ? "20vh" : "20vh" }}>
                <Image src={img} />
                <ContainerIcon>
                  <Icon src={Heart} />
                </ContainerIcon>
                {sale && <Sale>SALE</Sale>}
              </ContainerImage>
            </a>

            <ContainerData>
              <Grid container alignItems={"center"}>
                <Grid item xs={10}>
                  <Name style={{ fontSize: "2vh" }}>{name}</Name>
                  <Price>${price}</Price>
                               <ColorsContainer>
                    {colors.map((c, index) => (
                      <Color
                        onClick={() => setColorSelected(index)}
                        key={index}
                        style={{
                          backgroundColor: c,
                          border: `solid 1px ${
                            colorSelected === index
                              ? "rgb(50,50,50)"
                              : "rgba(0,0,0,0)"
                          }`,
                        }}
                      />
                    ))}
                  </ColorsContainer>
                </Grid>
                <Grid item xs={2}>
                  <Icon
                    style={{ height: "3vh", width: "3vh" }}
                    src={IconCart}
                  />
                </Grid>
              </Grid>
            </ContainerData>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};
export default ProductCard;
