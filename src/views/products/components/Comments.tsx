import React from "react";
import styled from "@emotion/styled";
import AvatarIcon from "../../../assets/Avatar.png";
import { Grid } from "@mui/material";
import { PrincipalFont } from "../../../fonts/Fonts";
import { BLUECOLOR } from "../../../colors/Colors";
const data = [0, 1, 2];
const Avatar = styled.img({
  width: "6vh",
});
const Container = styled.div({
  marginBottom: "5vw",

});
const Title = styled.p({
  color: "rgb(0,0,0)",
  fontFamily: PrincipalFont,
  fontWeight: 600,
  textAlign: "left",
  marginTop: 0,
  marginBottom: "-0.5vw",
});
const Text = styled.p({
  color: "rgba(94, 94, 94, 1)",
  textAlign: "left",
  fontSize: "1.6vh",
});
const PrincipalTitle = styled.p({
  fontSize: "4vh",
  margin: 0,
  fontFamily: PrincipalFont,
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "2.5vh",

});
const Comments = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <PrincipalTitle>Comments</PrincipalTitle>
        </Grid>
      </Grid>

      {data.map((item, index) => (
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={2}>
            <Avatar src={AvatarIcon} />
          </Grid>
          <Grid item xs={9}md={9}>
            <Title>Joe Davis</Title>
            <Text>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra
            </Text>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};
export default Comments;
