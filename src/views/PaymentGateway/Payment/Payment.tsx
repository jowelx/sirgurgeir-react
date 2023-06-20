import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { BLUECOLOR } from "../../../colors/Colors";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import master from "../../../assets/m.png";
import visa from "../../../assets/v.jpg";
import paypal from "../../../assets/p.png";
import binance from "../../../assets/b.png";
import coinbase from "../../../assets/c.jpg";
import stripe from "../../../assets/s.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
const ContainerSelect = styled.div({
  borderRadius: 6,
  width: "105%",
  border: "solid 1px rgb(232,232,232)",
});
const Select = styled.select({
  outline: "none",
  backgroundColor: "rgba(0,0,0,0)",
  borderRadius: 6,
  border: "solid 1px rgba(232,232,232,0)",
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
  cursor: "pointer",
  fontWeight: 500,
  width: "99%",
  borderRadius: 6,
  padding: "1.3vw ",
  "& p": {
    margin: 0,
  },
});
const CardMethod = styled.img({
  height: "auto",
  width: "auto",
  maxWidth: "4vw",
  maxHeight: "4.5vh",
});
const Payment = () => {
  const [methodSelected, setMethodSelected] = useState("master");
  return (
      <>
          <Grid container>
              <Grid item xs={12}>
                      <Grid container justifyContent={"space-around"} rowSpacing={2}>
        <Grid item xs={11}>
          <Title>Final Step, make the payment </Title>
        </Grid>
        <Grid item xs={11}>
          <ContainerSelect>
            <Grid container alignItems={"center"}>
              <Grid item xs={1}>
                <CardMethod src={methodSelected === "master" ? master : visa} />
              </Grid>
              <Grid item xs={10}>
                <Select
                  id="mySelect"
                  onChange={(e) => setMethodSelected(e.target.value)}
                >
                  <option value="master">MasterCard</option>
                  <option value="visa">Visa</option>
                </Select>
              </Grid>
            </Grid>
          </ContainerSelect>
        </Grid>
              <Grid item xs={11}>
                    <Label>Card Number</Label>
                  <ContainerSelect>
                              
            <Grid container alignItems={"center"}>
              <Grid item xs={1}>
                <CardMethod src={methodSelected === "master" ? master : visa} />
              </Grid>
              <Grid item xs={10}>
                              <Input style={{border:0}} />
              </Grid>
            </Grid>
          </ContainerSelect>


        </Grid>
        <Grid item xs={5}>
          <Label>Expired</Label>
          <Input />
        </Grid>
        <Grid item xs={5}>
          <Label>Cvc</Label>
          <Input />
        </Grid>
  
        <Grid item xs={11}>
          <Label>Discout code</Label>
          <Input />
              </Grid>
             
            <Grid item xs={11}>
              <a href="/paymentSuccess" style={{color:'white',textDecoration:'none'}}>
                <Button>Continue to payment</Button>
                </a>
        </Grid>
          </Grid>  
              </Grid>
          </Grid>

          
    </>
  );
};
export default Payment;
