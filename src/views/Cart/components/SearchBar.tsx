import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BLUECOLOR, YELLOWCOLOR } from "../../../colors/Colors";
import truck from "../../../assets/Truck.png";
import cursor from "../../../assets/cursor.png";
const Container = styled.div({
    borderRadius: 12,
    width: "100%",
    border: "solid 1px rgb(232,232,232)",
    padding: "1.2vw 0",
    marginBottom:'2vh'
});
const YelowText = styled.p({
    margin: 0,
  color: YELLOWCOLOR,
    marginLeft:'-2vh'
});
const InputSearch = styled.input({
    margin: 0,
    outline: "none",
    border: 0,
    paddingLeft: "1vh",
  backgroundColor: "rgba(0,0,0,0)",
    fontSize:'2vh'
});
const ContainerYelow = styled.div({
    backgroundColor: YELLOWCOLOR,
    borderRadius: 12,
    padding:'3vh 2vh'
});
const BlueText = styled.p({
    color: BLUECOLOR,
    margin: 0,
    fontSize: '4vh',
  fontWeight: 700,
    textAlign:'left'
});
const TruckImage = styled.img({
    width: "100%",
});
const Cursor = styled.img({
    width: "auto",
    height: "1.8vh",
});
const InputCoupons = styled.input({
    border: 0,
    borderRadius: "1vh",
    backgroundColor: 'rgba(250, 250, 250, 1)',
    padding: '1.2vw 1vw',
    outline: "none",
})
const SearchBar = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={9} md={ 5} style={{}}>
              <Cursor src={cursor} />
              <InputSearch placeholder="Ship to colombia" />
            </Grid>

            <Grid item xs={2}>
              <YelowText>Choose</YelowText>
            </Grid>
          </Grid>
        </Container>
          </Grid>
    
          <Grid item xs={12}>
              <ContainerYelow>
                  <Grid container justifyContent={"space-between"} alignItems={"center"}>
                      <Grid item xs={1} md={1}>
                          <TruckImage src={truck} />
                      </Grid>
                      <Grid item xs={11}md={5}>
                          <BlueText>
                              DELIVERY FREE
                          </BlueText>
                      </Grid>
                       <Grid item xs={12}md={5}>
                          <InputCoupons  placeholder="Enter your code"/>
                          
                      </Grid>
                  </Grid>
              </ContainerYelow>
          </Grid>
    </Grid>
  );
};
export default SearchBar;
