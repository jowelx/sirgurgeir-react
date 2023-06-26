import React, { useState } from "react";
import Delivery from "./Delivery/Delivery";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { BLUECOLOR } from "../../colors/Colors";
import bg1 from "../../assets/bgPayment1.png";
import bg2 from "../../assets/bgPayment2.png";
import Payment from "./Payment/Payment";
const MenuContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  marginTop: "1vw",
});
const MenuItem = styled.div({
  color: BLUECOLOR,
  margin: "0 2.5vh",
  width: "9vh",
});
const Bar = styled.div({
  transition: "all 0.2s ease",
  marginTop: "0.5vw",
  height: "0.4vw",
  width: "100%",
  backgroundColor: BLUECOLOR,
  borderRadius: 200,
});
const Image = styled.img({
  height: "99.9vh",
  width: "auto",
});
const ContainerImage = styled.div({
  position: "relative",
  marginLeft: "6vw",
});
const Text = styled.p({
  color: "white",
  fontWeight: 700,
  fontSize: "1.6vw",
  width: "100%",
  textAlign: "left",
});
const ContainerText = styled.div({
  position: "absolute",
  paddingLeft: "2vw",
  right: 0,
  left: 0,
  bottom: 0,
});
const PaymentGateWay = () => {
  const [menu, setManu] = useState(0);
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={11}>
        <Grid container columnSpacing={0}>
          <Grid
            item
            xs={10}
            md={6}
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {menu === 0 ? <Delivery setManu={setManu} /> : <Payment />}
            <MenuContainer>
              <MenuItem>
                Delivery
                <Bar />
              </MenuItem>
              <MenuItem>
                Payment
                <Bar
                  style={{
                    backgroundColor:
                      menu === 1 ? BLUECOLOR : "rgb(232,232,232)",
                  }}
                />
              </MenuItem>
            </MenuContainer>
          </Grid>
          <Grid item xs={6} sx={{display:{xs:'none',md:'flex'}}}>
            <ContainerImage>
              <Image src={menu === 1 ? bg1 : bg2} />
              <ContainerText>
                <Text>
                  “Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et”
                </Text>
                <Text style={{ fontWeight: 400 }}>Gorem ipsum</Text>
              </ContainerText>
            </ContainerImage>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PaymentGateWay;
