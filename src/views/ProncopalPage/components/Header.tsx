import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ArrowIcon from "../../../assets/ArrowWhite.png";
import { BLUECOLOR } from "../../../colors/Colors";
import image from "../../../assets/2.png";
const data = [
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const H1 = styled.p({
  color: "black",
  fontSize: "4vw",
  textAlign: "left",
  fontWeight: 600,
  lineHeight: 1.2,
});
const H2 = styled.p({
  color: "black",
  fontSize: "1.6vw",

  textAlign: "left",
});
const H3 = styled.p({
  color: "#5E5E5E",
  fontSize: "1.2vw",
  textAlign: "left",
});
const H4 = styled.p({
  fontSize: "1vw",
  color: "#5E5E5E",
  textAlign: "left",
  lineHeight: 2,
});
const Button = styled.div({
  width: "10vw",
  borderRadius: 6,
  backgroundColor: BLUECOLOR,
  padding: "1vw",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});
const Arrow = styled.img({
  width: "2vw",
});
const Image = styled.img({
  height: "100%",
});
const Header = () => {
  return (
    <>
      <div>
        <Grid container rowSpacing={5}>
          <Grid item xs={6}>
            <H1>
              Level up your style
              <br />
              with our summer <br />
              collections
            </H1>
            <H4>
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate
              <br /> libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad <br />
              litora torquent per conubia nostra, per inceptos himenaeos.
            </H4>
            <br />
            <Button>
              Shop Now
              <Arrow src={ArrowIcon} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <div style={{ width: "45vw", overflow: "hidden", height: "75vh" }}>
              <Image src={image} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <H2 style={{fontWeight:600}}>
              We provide best
              <br /> customer experiences
            </H2>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                padding: "0.5vw",
                borderLeft: `solid 2px ${BLUECOLOR}`,
                paddingLeft: "1vw",
              }}
            >
              <H3>
                We ensure our customers have the best shopping
                <br /> experience
              </H3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={"space-around"} columnSpacing={2}>
              {data.map((item, index) => (
                <Grid key={index} item xs={3}>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "5vw",
                        height: "5vw",
                        borderRadius: 12,
                        backgroundColor: "rgba(235, 235, 235, 1)",
                      }}
                    />
                    <H2 style={{ color: BLUECOLOR, fontWeight: 600 }}>
                      {item.title}
                    </H2>
                    <H4>{item.text}</H4>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Header;
