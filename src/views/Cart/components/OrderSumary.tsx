import React,{useState,useEffect} from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BLUECOLOR } from "../../../colors/Colors";
import StarRateIcon from "@mui/icons-material/StarRate";
import { PrincipalFont } from "../../../fonts/Fonts";
import ArrowIcon from "../../../assets/ProductArrow.png";

const Icon = styled.img({
  width: "2vw",
  height: "2vw",
});
const ButtonBlue = styled.div({
  borderRadius: 200,
  padding: "1vh",
  backgroundColor: BLUECOLOR,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const Tittle = styled.p({
  color: BLUECOLOR,
  fontWeight: 700,
  textAlign: "left",
});
const Text = styled.p({
  textAlign: "left",
});
const PriceUnit = styled.p({
  fontWeight: 700,
  textAlign: "right",
});
const PriceTotal = styled.p({
  fontWeight: 700,
  textAlign: "right",
  fontSize: "2.8vh",
  marginTop:'1.8vh'
});
const OrderSumary = ({ data }: any) => {
      const [count, setCount] = useState(0);
const [price,setPrice]=useState(0)
  useEffect(() => {
    const trueItemsCount = data.reduce((acc:any, item:any) => {
      if (item.state === true) {
        return acc + item.amount;
      } else {
        return acc;
      }
    }, 0);
const amountPRice =data.reduce((acc:any, item:any) => {
      if (item.state === true ) {
        return acc + item.price*item.amount;
      } else {
        return acc;
      }
}, 0);
      setPrice(amountPRice)
    setCount(trueItemsCount);
  }, [data]);
  return (
    <><div style={{
padding:'1.4vh 2vw',
      boxShadow:" 0px 4px 17px 2px rgba(0, 0, 0, 0.08)",
borderRadius: 11
    }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Tittle>ORDER SUMARY</Tittle>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Text>x{count} Pieces</Text>
            </Grid>
            <Grid item xs={6}>
              <PriceUnit>${price}</PriceUnit>
            </Grid>
            <Grid item xs={6}>
              <Text>Sub total</Text>
            </Grid>
            <Grid item xs={6}>
              <PriceTotal>${price},00</PriceTotal>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <ButtonBlue>
            <a href="/payment"
              style={{
                fontSize: "2vh",
                fontWeight: 600,
                color: "white",
                margin: " 0",
                textDecoration:'none'
              }}
            >
              Checkout now
            </a>
            <div style={{display:'flex',alignItems:'center'}}>
              <Icon
                style={{
                  marginLeft: "2vw",
                  padding: "0.5vh",
                  borderRadius: 200,
                  border: "solid 1px white",
                  width: "1.8vh",
                  height: "auto",
                }}
                src={ArrowIcon}
              />
            </div>
          </ButtonBlue>
        </Grid>
      </Grid>
    </div>

    </>
  );
};
export default OrderSumary;
