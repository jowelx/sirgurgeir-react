import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import CheckIcon from "../../../components/UI/CheckIcon";
import { BLUECOLOR } from "../../../colors/Colors";
import Footer from "../../../components/footer/Footer";
import NavBarAbout from "../../about/components/NavBarAbout";
import Message from "./message/message";
import Invoice from "./invoice/Invoice";
const Container = styled(Grid)({
  height: "100vh",
});
const Link = styled.a({
  textDecoration: "none",
});
const Title = styled.p({
  fontSize: "10vh",
  color: BLUECOLOR,
  fontWeight: 700,
});
const Card = styled.div({
  width: "100%",
});
const ContainedButton = styled.div({
  width: "100%",
  padding: "2vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: BLUECOLOR,
  color: "white",
  borderRadius: 5,
  cursor: "pointer",
});
const OutlinedButton = styled.div({
  width: "100%",
  padding: "2vh",
  display: "flex",
  justifyContent: "center",
  border: `solid 1px ${BLUECOLOR}`,
  borderRadius: 5,
  color: BLUECOLOR,
  cursor: "pointer",
});
const Succes = () => {
  const [screen, setScreen] = useState(0);
  return (
    <>
      <NavBarAbout />
      {screen === 0 && <Message setScreen={setScreen} />}
      {screen === 1 && <Invoice setScreen={setScreen} />}
      <Footer />
    </>
  );
};
export default Succes;
