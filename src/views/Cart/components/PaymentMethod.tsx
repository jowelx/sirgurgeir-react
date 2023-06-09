import React from 'react';
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { BLUECOLOR } from '../../../colors/Colors';
import paypal from '../../../assets/p.png';
import binance from '../../../assets/b.png';
import coinbase from '../../../assets/c.jpg';
import stripe from '../../../assets/s.png';
import visa from '../../../assets/v.jpg';
import mastercard from '../../../assets/m.png'
const Title = styled.p({
        fontSize: '3vh',
    textAlign: 'left',
    color: BLUECOLOR,
    fontWeight:700
})
const Image = styled.img({
    width: 'auto',
    height: '4vh',
    
})
const Images = [mastercard,paypal,stripe,coinbase,visa,binance]
const PaymentMethod = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Title>
                    WE ACCEPT
</Title>
            </Grid>
            {Images.map((i) => (
                <Grid item xs={6} md={4}>
                    
                <Image src={i} />
                    </Grid>
           ) )}
        </Grid>
    )
}
export default PaymentMethod;