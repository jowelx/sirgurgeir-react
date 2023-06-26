import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { data } from "../../SearchProducts/components/DataProducts";
import ProductCard from "../../../components/UI/ProductCard";
import EastIcon from "@mui/icons-material/East";
import ArrowIcon from "../../../assets/ProductArrow.png";
import SwipeableViews from "react-swipeable-views";
import { BLUECOLOR } from "../../../colors/Colors";
const Title = styled.p({
  fontSize: "5vh",
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
  backgroundColor: "rgba(0,0,0,0)",
  color: BLUECOLOR,
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
  border: `solid 1px ${BLUECOLOR}`,
  backgroundColor: "rgba(0,0,0,0)",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.2s ease",
  "&:hover": {
    color: "white",
    backgroundColor: BLUECOLOR,
  },
});
const Products = () => {
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
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Title>Currated Picks</Title>
        </Grid>
        <Grid item xs={12} sx={{display:{xs:'flex',md:'none'}}}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
            <SwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents={true}
              animateTransitions={true}
                axis={"x"}
                threshold={2}
              containerStyle={{ height: "auto", width: "100%" }}
            >
                {data.map((item, index) => (
                <Grid container>
                     <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                  />
                    </Grid>
                     <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                  />
                </Grid>
                </Grid>
               
              ))}
            </SwipeableViews>
            </Grid>

          </Grid>
        </Grid>
            <Grid item xs={12} sx={{display:{xs:'none',md:'flex'}}}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
            <SwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents={true}
              animateTransitions={true}
                axis={"x"}
                threshold={2}
              containerStyle={{ height: "auto", width: "100%" }}
            >
                {data.map((item, index) => (
                <Grid container>
                     <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                      />
                      
                    </Grid>
                                         <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                      />
                      
                    </Grid>
                                         <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                      />
                      
                    </Grid>
                                         <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  sx={{ px: { xs: 1, md: 3 }, py: { xs: 2, md: 4 } }}
                >
                  <ProductCard
                    xl
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                      />
                      
                    </Grid>
                </Grid>
               
              ))}
            </SwipeableViews>
            </Grid>

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
            <ArrowLeft onClick={handleBack} />
            <ArrowRight onClick={handleNext} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Products;
