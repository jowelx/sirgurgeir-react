import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import CheckIcon from "../../../../components/UI/CheckIcon";
import { BLUECOLOR } from "../../../../colors/Colors";
import Footer from "../../../../components/footer/Footer";
import NavBarAbout from "../../../about/components/NavBarAbout";
const Container = styled(Grid)({
  height: "100vh",
});
const Link = styled.a({
  textDecoration: "none",
});
const Title = styled.p({
  fontSize: "7.8vh",
  color: BLUECOLOR,
  fontWeight: 700,
});
const Card = styled.div({
    width: "100%",
    boxShadow: '0 5px 10px 0 rgba(0, 23, 48,0.1)',
    borderRadius: 4,
    padding: '0.5vh',
    paddingBottom: '4vh',
    paddingTop:'4vh'
});
const ContainedButton = styled.div({
  padding: "2vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: BLUECOLOR,
  color: "white",
  borderRadius: 5,
  cursor: "pointer",
});
const OutlinedButton = styled.div({
  padding: "2vh",
  display: "flex",
  justifyContent: "center",
  border: `solid 1px ${BLUECOLOR}`,
  borderRadius: 5,
  color: BLUECOLOR,
  cursor: "pointer",
});
const Message = ({setScreen}:{setScreen:any}) => {
  return (
    <>

      <Container container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} md={6}>
          <Card>
            <Grid container justifyContent={"space-around"} rowSpacing={2}>
              <Grid item xs={8} md={1}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CheckIcon />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Title>PAYMENT SUCCESS</Title>
              </Grid>
              <Grid item xs={10} md={5}>
                <OutlinedButton onClick={()=>setScreen(1)}>Invoice</OutlinedButton>
              </Grid>
              <Grid item xs={10} md={5}>
                <Link href={"/"}>
                  <ContainedButton>Back to shop</ContainedButton>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </>
  );
};
export default Message;
