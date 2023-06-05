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
  padding: "0.5vw",
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
  fontSize: "1.4vw",
  marginTop:'1vw'
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
padding:'1vw 2vw',
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
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 600,
                color: "white",
                margin: " 0",
              }}
            >
              Checkout now
            </p>
            <div>
              <Icon
                style={{
                  marginLeft: "2vw",
                  padding: "0.5vw",
                  borderRadius: 200,
                  border: "solid 1px white",
                  width: "0.8vw",
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
