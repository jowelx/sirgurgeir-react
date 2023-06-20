import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import CheckIcon from "../../../../components/UI/CheckIcon";
import { BLUECOLOR } from "../../../../colors/Colors";
import Footer from "../../../../components/footer/Footer";
import NavBarAbout from "../../../about/components/NavBarAbout";
import GetAppIcon from '@mui/icons-material/GetApp';
const data = [
  { name: "reference Number", value: "0000164646" },
  { name: "Date", value: "Mar 22, 2023" },
  { name: "Time", value: "07:08AM" },
  { name: "Payment Method", value: "Credit Card" },
  { name: "Amount", value: "IDR 1,000,000" },
];
const Container = styled(Grid)({
  height: "100vh",
});
const Link = styled.a({
  textDecoration: "none",
});
const Title = styled.p({
  fontSize: "5vh",
  color: BLUECOLOR,
  fontWeight: 700,
  margin: 0,
});
const Card = styled.div({
  width: "100%",
  boxShadow: "0 5px 10px 0 rgba(0, 23, 48,0.1)",
  borderRadius: 4,
  padding: "0.5vh",
  paddingBottom: "4vh",
  paddingTop: "4vh",
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
const Text = styled.p({
    textAlign: 'left',
    color:'rgb(100,100,100)'
})
const TextStrong = styled.p({
    textAlign: 'right',
    fontWeight: 700,
        color:'rgb(30,30,30)'
})
const Invoice = ({ setScreen }: { setScreen: any }) => {
  return (
    <>
      <Container container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} md={4}>
          <Card>
            <Grid container justifyContent={"space-around"} rowSpacing={2}>
              <Grid item xs={8} md={1}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CheckIcon />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Title>Payment success!</Title>
                          </Grid>
                          <Grid item xs={12}>
                            
                              {data.map((item,index) => (
                                  <Grid key={index} container justifyContent={"space-around"}>
                                      <Grid item xs={5}><Text>
                                        {item.name}</Text></Grid>
                                      <Grid item xs={5}><TextStrong>
                                        {item.value}</TextStrong></Grid>
                                     </Grid>  
                          
                                  ))}
                             
                              
                          </Grid>
              <Grid item xs={10} md={5}>
                <OutlinedButton onClick={() => setScreen(0)}>
               <GetAppIcon/>   Get PDF Recepeit
                </OutlinedButton>
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
export default Invoice;
