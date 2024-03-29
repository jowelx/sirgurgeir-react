import React from "react";
import styled from "@emotion/styled";
import AvatarIcon from "../../../assets/Avatar.png";
import { Grid } from "@mui/material";
import { PrincipalFont } from "../../../fonts/Fonts";
import { BLUECOLOR } from "../../../colors/Colors";
import AI1 from "../../../assets/Ropa/1.webp";
import AI2 from "../../../assets/Ropa/2.webp";
import AI3 from "../../../assets/Ropa/3.webp";
import AI4 from "../../../assets/Ropa/4.webp";
const AditionalImages = [
  { img: AI1 },
  { img: AI2 },
  { img: AI3 },
  { img: AI4 },
];
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
const AditionalImage = styled.img({
  width: "auto",
  borderRadius: 4,
  height: "8vh",
  marginBottom:'1.5vh'
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
        <Grid container justifyContent={"center"}>
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
            <Grid container>
                  {AditionalImages.map((item, index) => (
            <Grid item xs={1}>
              <AditionalImage src={item.img} />
            </Grid>
          ))}
            </Grid>
          </Grid>
  
        </Grid>
      ))}
    </Container>
  );
};
export default Comments;
