import React from 'react';
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { data } from '../../SearchProducts/components/DataProducts';
import ProductCard from '../../../components/UI/ProductCard';

import ArrowIcon from "../../../assets/ProductArrow.png";
import { BLUECOLOR } from '../../../colors/Colors';
const Title = styled.p({
  fontSize: "2.5vw",
  textAlign: "left",
  fontWeight: 600,
});
const Container = styled.div({
  margin: "2vw 0",
});
const ArrowLeft = styled.img({
  padding: "1.5vh",
  borderRadius: 200,
  backgroundColor: BLUECOLOR,
  cursor: "pointer",
  transform: "rotate(180deg)",
  opacity: 0.8,
  transition: "0.2s ease",
  "&:hover": {
    opacity: 1,
  },
});
const ArrowRight = styled.img({
  padding: "1.5vh",
  borderRadius: 200,
  backgroundColor: BLUECOLOR,
  cursor: "pointer",
  opacity: 0.8,
  transition: "all 0.2s ease",
  "&:hover": {
    opacity: 1,
  },
});
const Products = () => {
    return (
        <Container>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12}>
                    <Title>
                        Currated Picks
</Title>
                </Grid>
                <Grid item xs={12}>
                    <Grid container columnSpacing={10}>
                        {data.map((item,index) => (
                            <Grid key={index} item xs={3}>
                                <ProductCard xl name={item.name } img={ item.img} price={ item.price} sale={item.sale} />    
                        </Grid>
                        ))}
</Grid>
                </Grid>
                <Grid item xs={2}>
                    <div style={{width:'100%',display:'flex',justifyContent:"space-around",marginTop:'5vw'}}>

          <ArrowLeft  src={ArrowIcon} />
          <ArrowRight  src={ArrowIcon} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Products;