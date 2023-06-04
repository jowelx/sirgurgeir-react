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
    marginBottom:'1.5vw'
});
const YelowText = styled.p({
    margin: 0,
    color: YELLOWCOLOR,
});
const InputSearch = styled.input({
    margin: 0,
    outline: "none",
    border: 0,
    paddingLeft: "1vw",
    backgroundColor: "rgba(0,0,0,0)",
});
const ContainerYelow = styled.div({
    backgroundColor: YELLOWCOLOR,
    borderRadius: 12,
    padding:'2vw 1vw'
});
const BlueText = styled.p({
    color: BLUECOLOR,
    margin: 0,
    fontSize: '1.8vw',
    fontWeight:700
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
    borderRadius: 15,
    backgroundColor: 'rgba(217, 217, 217, 1)',
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
            <Grid item xs={5} style={{}}>
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
                  <Grid container justifyContent={"space-around"} alignItems={"center"}>
                      <Grid item xs={1}>
                          <TruckImage src={truck} />
                      </Grid>
                      <Grid item xs={5}>
                          <BlueText>
                              DELIVERY FREE
                          </BlueText>
                      </Grid>
                       <Grid item xs={6}>
                          <InputCoupons  placeholder="Enter your code"/>
                          
                      </Grid>
                  </Grid>
              </ContainerYelow>
          </Grid>
    </Grid>
  );
};
export default SearchBar;
