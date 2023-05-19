import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { PrincipalFont } from "../../../fonts/Fonts";
import { BLUECOLOR, YELLOWCOLOR } from "../../../colors/Colors";
import Person from "../../../assets/personBlue.png";
import { Divider } from "@mui/material";
import ComillasIcon from '../../../assets/Comillas.png'
const Container = styled.div({
  marginTop: "20vh",
});
const BlueTittle = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "14vh",
  fontWeight: 700,
  margin: 0,
  display: "inline-block",
});
const YellowTittle = styled.p({
  fontFamily: PrincipalFont,
  color: YELLOWCOLOR,
  fontSize: "14vh",
  fontWeight: 700,
  margin: 0,
  display: "inline-block",
});
const Text = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "3vh",
});
const SubText = styled.p({
  fontFamily: PrincipalFont,
  color: BLUECOLOR,
  fontSize: "1.8vh",
});
const PersonIcon = styled.img({
  width: 30,
});
const ContainerIconPerson = styled.div({
  width: 50,
  height: 50,
  borderRadius: "100%",
  border: `solid 2px ${YELLOWCOLOR}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const data = [0, 1, 2];
const LastData = [{
    profesion:"Comedic Actor",
    name:"Will Rogers",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
},{
    profesion:"Industrialist & philanthropist",
    name:"Andrew Carnegie",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
},{
    profesion:"British philosopher",
    name:"John Stuart Mill",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
},]
const Body = () => {
  return (
    <>
      <Grid container justifyContent={"center"} style={{marginBottom:"15vh"}}>
        <Grid item xs={12}>
          <BlueTittle>About</BlueTittle>
        </Grid>
        <Grid item xs={10}>
          <Text style={{ marginBottom: "20vh" }}>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Grid item xs={12}>
              <YellowTittle>Why&nbsp;</YellowTittle>
              <BlueTittle>should</BlueTittle>
              <br />
              <BlueTittle>choose&nbsp;</BlueTittle>
              <YellowTittle>our</YellowTittle>
            </Grid>
            <Grid item xs={11}>
              <BlueTittle style={{ textAlign: "left" }}>
                product?&nbsp;&nbsp;
              </BlueTittle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container justifyContent={"flex-end"}>
            {data.map((item) => (
                <Grid key={item} item xs={10}>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={2}>
                            <ContainerIconPerson>
                                <PersonIcon src={Person}/>
</ContainerIconPerson>
                        </Grid>
                        <Grid item xs={10}>
                            <Text style={{textAlign:"left",width:"100%"}}>
                                Lorem ipsum dolor sit amet
                            </Text>
                            <SubText style={{textAlign:"left",width:"100%"}}>
Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </SubText>
                            </Grid>
                    </Grid>
                    <Divider/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <BlueTittle>
              What our happy <br /> customers say
            </BlueTittle>
          </Container>
        </Grid>
        <Grid item xs={10}>
                  <Grid container style={{marginTop:'20vh'}}>
                      
                      {LastData.map((item, index) => (
                          <Grid item xs={4}>
                              <Grid container>
                                  <Grid item xs={2}>
                                      <ContainerIconPerson style={{border:0}}>
                                          <PersonIcon src={ComillasIcon}/>
                                      </ContainerIconPerson>
                                  </Grid>
                                  <Grid item xs={11}>
                                      <Text style={{textAlign:'justify'}}>
                                          {item.text}
                                      </Text>
                                      
                                  <Divider />
                                  </Grid>
                                  
                                  <Grid item xs={11}>
                                      <Text style={{textAlign:"left"}}>
                                          {item.name}
                                      </Text>
                                      <SubText style={{textAlign:"left"}}>
                                          {item.profesion}
                                      </SubText>
                                      </Grid>
                                  
                              </Grid>
                              
                              </Grid>
                      ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Body;
