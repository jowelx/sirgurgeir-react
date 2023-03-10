import React, {useEffect, useState,useRef} from 'react';
import {Grid} from '@mui/material';
import styled from '@emotion/styled';
import SwipeableViews from 'react-swipeable-views';
const Container = styled.div({
  width:'100%'
})
const data = [{
    img: './assets/caousel.png',
    city: 'Los angeles',
    discount: '50%'
},{
    img: './assets/carousel1.jpg',
    city: 'Aspen',
    discount: '50%'
},{
    img: './assets/carousel2.jpg',
    city: 'San francisco',
    discount: '50%'
    },{
    img: './assets/carousel2.png',
    city: 'Denver (output)',
    discount: '50%'
}
]
const ContainerImage = styled.div({
  width: '100%',
  position: 'relative',
  height: '60vh',
  overflow: 'hidden'
})
const ContainerText = styled.div({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  right: 0,
  top: 0,
  bottom: 0,
})
const Discount = styled.div({
  fontSize: "20vh",
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'white'
})
const Button = styled.div({
  width: '100%',
  color: 'black',
  padding: '2vh 0vh',
  backgroundColor: 'white',
  cursor: 'pointer',
  transition: 'ease 0.5s',
  ':hover': {
    opacity:0.9
  }
})
const Icon = styled.img({
  width: 15,
  height:22
})
const Arrows = styled.img({
  padding: "1vh 2vh",
  width: 28,
  height: 14,
})
const ContainerArrow = styled.div({
  width: '100%', 
  cursor: 'pointer',
   transition: 'ease 0.5s',
  ':hover': {
    opacity:0.9
  }
})
const City = styled.p({
  color: 'white',
  margin: 0,
  marginLeft:10
})
const CarouselSection = () => {
    

 const [index, setIndex] = useState(0);
const handleNext = () => {
  setIndex((prevIndex) => {
    if (prevIndex === data.length - 1) {
      return 0;
    } else {
      return prevIndex + 1;
    }
  });
};

const handleBack = () => {
  setIndex((prevIndex) => {
    if (prevIndex === 0) {
      return data.length - 1;
    } else {
      return prevIndex - 1;
    }
  });
};
  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente slide
      setIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, [data.length]);

  function handleChangeIndex(index) {
    setIndex(index);
  }
    return (<Container>
  <SwipeableViews
      index={index}
      onChangeIndex={handleChangeIndex}
      enableMouseEvents={true}
      animateTransitions={true}
      axis={'x'}
      containerStyle={{ height: 'auto' ,width:'100%'}}
    >
      {data.map((item, index) => (
     <ContainerImage >
          
          <img src={item.img} alt={`Slide ${index}`} style={{width:'100%'}} />
         <ContainerText>
            <Grid container justifyContent={"center"} rowSpacing={7}>
              <Grid item xs={12}>
            < Discount style={{opacity:index ===0?1:0}}>
              50% off
            </ Discount >
              </Grid>
              <Grid item xs={3}>
                <Button>
                  EXPLORE NOW
</Button>
              </Grid>
  
              <Grid item xs={10}>
   
                  <Grid container justifyContent={"space-around"}>
                
                      <Grid style={{display:'flex',flexDirection:'row'}} item xs={4}>
                      <Icon  style={{opacity:index ===0?1:0}} src={"./assets/location.png"} />
                      <City style={{opacity:index ===0?1:0}}>
                        {item.city}
                      </City>
                    </Grid>
                  <Grid item xs={2}> 
                    <div style={{display:'flex'}}>
   <ContainerArrow>

                       <Arrows onClick={handleBack} src={"./assets/ArrowR.png"} />
                    </ContainerArrow>
                    <ContainerArrow>

                      <Arrows onClick={handleNext}src={"./assets/ArrowL.png"} />
                    </ContainerArrow>
                    </div>
                 
                    </Grid>
                    
                  </Grid>
              </Grid>
            </Grid>

          </ContainerText>
     </ContainerImage>
    
      ))}
    </SwipeableViews>
    </Container>)
}
export default CarouselSection 