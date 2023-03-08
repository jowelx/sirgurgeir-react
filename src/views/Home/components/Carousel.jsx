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
  backgroundColor: 'white'
})
const Icon = styled.img({
  width: 15,
  height:22
})
const Arrows = styled.img({
  padding: "1vh 2vh",
  width: 28,
  height:14
})

const City = styled.p({
  color: 'white',
  margin: 0,
  marginLeft:10
})
const CarouselSection = () => {
    

 const [index, setIndex] = useState(0);

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
         {index ===0&& <ContainerText>
            <Grid container justifyContent={"center"} rowSpacing={7}>
              <Grid item xs={12}>
            < Discount >
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
                      <Icon src={"./assets/location.png"} />
                      <City>
                        {item.city}
                      </City>
                    </Grid>
                    <Grid item xs={2}> 
                       <Arrows src={"./assets/ArrowR.png"} />
                      <Arrows src={"./assets/ArrowL.png"} />
                    </Grid>
                    
                  </Grid>
              </Grid>
            </Grid>

          </ContainerText>}
     </ContainerImage>
    
      ))}
    </SwipeableViews>
    </Container>)
}
export default CarouselSection 