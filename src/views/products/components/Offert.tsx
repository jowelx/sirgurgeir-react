import React from 'react';
import styled from '@emotion/styled'
import { BLUECOLOR, YELLOWCOLOR } from '../../../colors/Colors';
import { PrincipalFont } from '../../../fonts/Fonts';
const Container = styled.div({

    backgroundColor: YELLOWCOLOR,
    position: 'fixed',
    right:"-9vw",
    transform: 'rotate(270deg)',
    padding: '0.5vw 2vw',

    bottom: "50%",
    zIndex:999
})
const Text = styled.p({
     fontFamily: PrincipalFont,
    color: BLUECOLOR,
 margin:0,
   
    fontWeight: 600,
       fontSize:'2vw'
    
})
const Offert = () => {
    return (
        <Container>
            <Text>
              GET US $10 OFF!
            </Text>
        </Container>
    )
}
export default Offert;