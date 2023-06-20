import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
const Container = styled.footer({
  width: "100%",
  paddingTop: "2vw",
  paddingBottom: "8vh",
});
const Link = styled.a({
  width: "100%",
  fontSize: "1.8vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const Logo = styled.img({
  marginTop: "7vh",
  width: "50%",
});
const ImageText = styled.p({
  fontSize: "4vh",
  fontWeight: 600,
  textAlign: "left",
  marginTop: "10vh",
});
const TittleList = styled.p({
  textAlign: "left",
  fontSize: "2.4vh",
  fontWeight: 600,
});
const Text = styled.p({
  textAlign: "left",
  fontSize: "1.5vh",
});
const Social = styled.img({
  width: "3vh",
  height: "3vh",
  marginTop: "0.5vw",
  cursor: "pointer",
});
const ButtonInit = styled.div({
  padding: 8,
  fontWeight: 600,
  cursor: "pointer",
  fontSize: "1.5vh",
  backgroundColor: "rgba(255, 194, 0, 1)",
  display: "flex",
  marginBottom: "2.5vh",
  alignItems: "center",
  justifyContent: "space-around",
});
const Divider = styled.div({
  height: 1,
  width: "100%",
  marginBottom: "4vh",
  marginTop: "10vh",
  backgroundColor: "rgba(255, 194, 0, 1)",
});
const EndText = styled.p({
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: "1.8vh",
});
const data = [
  {
    tittle: "Men",
    content: ["Explore men", "Clothing", "Snow", "Motocycle", "Archive sale"],
    link: "/SearchProduct",
  },
  {
    tittle: "Women",
    content: ["Explore women", "Clothing", "Snow", "Archive sale"],
    link: "SearchProduct",
  },
  {
    tittle: "Explore",
    content: ["Journal", "Our Stores", "About"],
    link: "PrincipalPage",
  },
  {
    tittle: "Support",
    content: ["Returns & Exchanges", "FAQS", "Accesibility"],
  },
];
const images = [
  "./assets/tiktok.png",
  "./assets/twiter.png",
  "./assets/ig.png",
  "./assets/fb.png",
];
const end = ["Privacy Policy", "Cookies Policy", "Terms and conditions"];
const Footer = () => {
  const volverAlInicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} md={11}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={12} md={3}>
              <Grid container alignItems={"center"}>
                <Grid item xs={12} md={10}>
                  <Logo src={"./assets/logo.svg"} />
                </Grid>
                <Grid item xs={12}>
                  <ImageText>Live the experience!</ImageText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container rowSpacing={6}>
                {data.map((item, index) => {
                  return (
                    <Grid item xs={3}>
                      <div style={{ marginLeft: 0 }}>
                        <TittleList>{item.tittle}</TittleList>
                        {item.content.map((i, e) => {
                          return (
                            <>
                              <Link href={item.link}>
                                <Text style={{ cursor: "pointer" }}>{i}</Text>
                              </Link>
                            </>
                          );
                        })}
                      </div>
                    </Grid>
                  );
                })}

                <Grid item xs={12}>
                  <Grid container justifyContent={"flex-start"}>
                    <Grid item xs={6} md={2}>
                      <ButtonInit onClick={volverAlInicio}>
                        Back to top <NorthIcon style={{ fontSize: 15 }} />
                      </ButtonInit>
                    </Grid>
                    <Grid item xs={12} md={5}></Grid>
                    <Grid item xs={12} md={4}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={4}>
                          <Link href={'/contact'}>
                          <TittleList style={{ margin: 0 }}>Contact</TittleList>
                          </Link>
                        </Grid>
                        {images.map((item, index) => (
                          <Grid item xs={2}>
                            <Social src={item} />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent={"space-around"}>
                <Grid item xs={11} md={4}>
                  <EndText style={{ textAlign: "left" }}>
                    2023. All Rights Reserved
                  </EndText>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container>
                    {end.map((item, index) => {
                      return (
                        <Grid item xs={4}>
                          <EndText>{item}</EndText>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;
