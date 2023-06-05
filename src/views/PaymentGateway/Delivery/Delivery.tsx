import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { BLUECOLOR } from "../../../colors/Colors";
const Label = styled.p({
  margin: 0,
  textAlign: "left",
  color: "rgb(140, 140, 140)",
  marginBottom: "0.5vw",
});
const Input = styled.input({
  outline: "none",
  backgroundColor: "rgba(0,0,0,0)",
  borderRadius: 6,
  border: "solid 1px rgb(232,232,232)",
  width: "100%",
  padding: "1vw",
});
const Title = styled.p({
  color: BLUECOLOR,
  textAlign: "left",
  fontWeight: 700,
  fontSize: "2vw",
});
const Button = styled.div({
  backgroundColor: BLUECOLOR,
    color: "white",
  cursor:'pointer',
  fontWeight: 500,
    width: "99%",
    borderRadius: 6,
    padding: "1.3vw ",
    "& p": {
        margin:0
    }
});

const Delivery = ({setManu}:any) => {
  return (
    <>
      <Grid container justifyContent={"space-around"} rowSpacing={2}>
        <Grid item xs={11}>
          <Title>How would you like to get your order?</Title>
        </Grid>
        <Grid item xs={5}>
          <Label>First name</Label>
          <Input />
        </Grid>
        <Grid item xs={5}>
          <Label>Last name</Label>
          <Input />
        </Grid>
        <Grid item xs={11}>
          <Label>E-mail</Label>
          <Input />
        </Grid>
        <Grid item xs={5}>
          <Label>City</Label>
          <Input />
        </Grid>
        <Grid item xs={1}>
          <Label>State</Label>
          <Input />
        </Grid>
        <Grid item xs={3}>
          <Label>Post code</Label>
          <Input />
        </Grid>
        <Grid item xs={11}>
          <Label>Country</Label>
          <Input />
        </Grid>
        <Grid item xs={11}>
          <Label>Street Address</Label>
          <Input />
              </Grid>
              <Grid item xs={11}>
                  <Button onClick={()=>setManu(1)}>
                      Continue to payment
                  </Button>
              </Grid>
      </Grid>
    </>
  );
};
export default Delivery;
