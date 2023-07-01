import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import {Grid} from '@mui/material'
import styled from "@emotion/styled";
import ArrowIcon from "../../../assets/ProductArrow.png";
import { BLUECOLOR } from "../../../colors/Colors";
import SA from "../../../assets/Ropa/r1.webp";
import SR from "../../../assets/Ropa/r2.webp";
import SN from "../../../assets/Ropa/r3.webp";
import scan from '../../../assets/scanIcon.png'
import { PrincipalFont } from "../../../fonts/Fonts";
import AI1 from '../../../assets/Ropa/1.webp'
import AI2 from '../../../assets/Ropa/2.webp'
import AI3 from '../../../assets/Ropa/3.webp'
import AI4 from '../../../assets/Ropa/4.webp'
const AditionalImages = [
  { img: AI1 },
  { img: AI2 },
  { img: AI3 },
   { img:AI4}
]
const ArrowLeft = styled.img({
  padding: "1.2vh",
  borderRadius: 200,
  backgroundColor: BLUECOLOR,
  cursor: "pointer",
  transform: "rotate(180deg)",
  opacity: 0.8,
  transition: "0.2s ease",
  "&:hover": {
    opacity: 1,
  },
});
const ArrowRight = styled.img({
  padding: "1.2vh",
  borderRadius: 200,
  backgroundColor: BLUECOLOR,
  cursor: "pointer",
  opacity: 0.8,
  transition: "all 0.2s ease",
  "&:hover": {
    opacity: 1,
  },
});
const ContainerArrow = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 999,
});
const Container = styled.div({
  position: "relative",
});
const ContanierNavigation = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop:'2vw'
});
const Dot = styled.div({
  height: "1.5vw",
  width: "100%",
  margin: "0",
  borderRadius: 100,
});
const ContainerDot = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems:'center',
  width: "1.5vw",
  borderRadius: 100,
  padding:"0.15vw",
  transition: "0.4s ease",
  cursor:'pointer'
});
const AditionalImage = styled.img({
  width: '100%',
  borderRadius:4
})
const ImageRounded = styled.img({
  borderRadius:4
})
const ViewProducts = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const offsetRadius = 2;
  const showNavigation = false;
  const Colors = ["#92ACBE", "#222222", "#E69BB5"];
  const slides = [
    {
      key: 1,
      content: <ImageRounded src={SA} alt="1" />,
    },
    {
      key: 2,
      content: <ImageRounded src={SN} alt="2" />,
    },
    {
      key: 3,
      content: <ImageRounded src={SR} alt="3" />,
    },
  ];

  const handleChangeSlide = (newSlide) => {
    const currentIndex = goToSlide;
    const direction = newSlide > currentIndex ? 1 : -1;
    setGoToSlide(newSlide);
    carouselRef.current.goToSlide(newSlide, direction);
  };
  const carouselRef = React.useRef();
  const handlePreviousSlide = () => {
    const previousSlide = goToSlide - 1 < 0 ? slides.length - 1 : goToSlide - 1;
    setGoToSlide(previousSlide);
  };

  const handleNextSlide = () => {
    const nextSlide = (goToSlide + 1) % slides.length;
    setGoToSlide(nextSlide);
  };

  return (
    <div>
      <Container style={{ width: "90%", height: "80vh", margin: "0 auto" }}>
        <Carousel
          ref={carouselRef}
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config}
        />
        <ContainerArrow>
          <ArrowLeft onClick={handlePreviousSlide} src={ArrowIcon} />
          <ArrowRight onClick={handleNextSlide} src={ArrowIcon} />
        </ContainerArrow>
      </Container>
      <ContanierNavigation>
        {Colors.map((item, index) => {
          return (
            <ContainerDot
            onClick={()=>handleChangeSlide(index)}
              style={{
                border: `solid 1px rgba(${
                  goToSlide === index ? "49, 49, 49, 0.58" : "0,0,0,0"
                })`,
              }}
            >
              <Dot style={{ backgroundColor: item }} />
            </ContainerDot>
          );
        })}
      </ContanierNavigation>
      <div style={{margin:'2vw 0',width:'100%',display:'flex',justifyContent:'center', alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <div>
          <img src={scan}/>
        </div>
        <p style={{fontFamily:PrincipalFont,fontSize:'2.5vh',marginTop:0 ,marginLeft:'1vw',color:'rgba(34, 34, 34, 1)',marginBottom:0}}>
          Roll over image to zoom in
        </p>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'0 5vh'}}>
      <Grid container columnSpacing={1}>
       
        {AditionalImages.map((item, index) => (
           <Grid item xs={3}>
          <AditionalImage src={item.img} />
           </Grid>
        ))}
       
</Grid>
      </div>

    </div>
  );
};

export default ViewProducts;
