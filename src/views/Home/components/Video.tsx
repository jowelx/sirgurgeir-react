import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Videos = styled.video({
  width: "100%",
  height: "116vh",
  backgroundColor: "rgb(10,10,10)",
});
const Container = styled.div({
  position: "relative",
});
const ContainerText = styled.div({
  position: "absolute",
  bottom: 0,
  width: "99%",
  height: "26%",
  paddingLeft: ".5%",
});
const Link = styled.a({
  cursor: "pointer",
  backdropFilter: " blur(4px)",
  borderRadius: 50,
  backgroundColor: "rgba(40,40,40,0.8)",
  color: "white",
  textTransform: "uppercase",
  letterSpacing: " 0.1em",
  fontSize: "13px",
  width: "auto",
  padding: ".8vh 2vh",
  border: "solid 1px rgb(250,250,250)",
  textDecoration: "none",
  transition: "all 0.4s",
  ":hover": {
    paddingLeft: 30,
    "& > div": {
      transform: "scale(1)",
    },
  },
});
const ContainerLink = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 12,
});
const Dot = styled.div({
  width: 8,
  height: 8,
  borderRadius: 200,
  backgroundColor: "white",
  marginLeft: 8,
  position: "absolute",
  left: 0,
  marginTop: 5,
  transform: "scale(0)",
  transition: "all 0.3s",
});
const Tittle = styled.p({
  fontSize: 48,
  margin: 0,
  fontWeight: 500,
  textAlign: "left",
  color: "white",
  letterSpacing: " 0.01em",
});
const Video = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (videoLoaded && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoLoaded]);
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // reiniciar el video
      videoRef.current.play(); // volver a reproducir el video desde el principio
    }
  };
  return (
    <Container>
      <Videos
        ref={videoRef}
        muted
        preload="auto"
        autoPlay
        src={"https://thetermuxchoice.github.io/Sigurgeir/video/video.mp4"}
        onEnded={handleVideoEnd}
      />
      <ContainerText>
        <Grid container justifyContent={"center"}>
          <Grid item xs={11}>
            <Grid container justifyContent={"flex-start"}>
              <Grid item xs={12}>
                <Tittle>The Mountains are Calling</Tittle>
              </Grid>
              <Grid item xs={12}>
                <ContainerLink>
                  <Link>
                    <Dot />
                    Explore Men's Snow Collection
                  </Link>
                </ContainerLink>
              </Grid>
              <Grid item xs={12}>
                <ContainerLink>
                  <Link>
                    <Dot />
                    Explore Women's Snow Collection
                  </Link>
                </ContainerLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerText>
    </Container>
  );
};
export default Video;
