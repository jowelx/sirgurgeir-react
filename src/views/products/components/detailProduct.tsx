import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import styled from "@emotion/styled";
import { Divider, Grid } from "@mui/material";
import IconHeart from "../../../assets/IconHeart.png";
import { BLUECOLOR, YELLOWCOLOR } from "../../../colors/Colors";
import { PrincipalFont } from "../../../fonts/Fonts";
import RegleIcon from "../../../assets/regla.png";
import ArrowIcon from "../../../assets/ProductArrow.png";
import IconShop from "../../../assets/IconShop.png";
import Card from "./Card";
const Title = styled.p({
  textAlign: "left",
  fontSize: "1.6vw",
});
const ShortText = styled.p({
  textAlign: "left",
  margin: 0,
  fontSize: "0.8vw",
  marginLeft: "0.8vw",
});
const Star = styled(StarRateIcon)({
  color: YELLOWCOLOR,
});
const YelowText = styled.p({
  color: YELLOWCOLOR,
  fontSize: "1vw",
});
const Icon = styled.img({
  width: "2vw",
  height: "2vw",
});
const IconRegla = styled.img({
  width: "1.8vw",
});
const SubTitle = styled.p({
  fontSize: "1.5vw",
  fontFamily: PrincipalFont,
  fontWeight: 600,
  margin: "1vw 0",
  textAlign: "left",
});
const Button = styled.div({
  width: "2vw",
  height: "2vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `solid 1px ${BLUECOLOR}`,
  borderRadius: 200,
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: BLUECOLOR,
    color: "white",
  },
});
const ButtonSize = styled.div({
  padding: "0.5vw 2vw",
  borderRadius: 200,
  marginRight: " 0.5vw",
  border: "solid 1px rgb(218, 218, 218, 1)",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: BLUECOLOR,
    color: "white",
  },
});
const Price = styled.p({
  fontSize: "2vw",
  fontFamily: PrincipalFont,
  fontWeight: 700,
  textAlign: "left",
});
const ContainerSizes = styled.div({
  display: "flex",
  flexDirection: "row",
});
const ContainerMargin = styled.div({
  margin: "1vw 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const ButtonBlue = styled.div({
  borderRadius: 200,
  backgroundColor: BLUECOLOR,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});
const ButtonWhite = styled.div({
  borderRadius: 200,
  backgroundColor: "rgba(0,0,0,0)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: `solid 1px ${BLUECOLOR}`,
});
const Sizes = ["S", "M", "L", "XL"];

const DetailProduct = () => {
  const [selectedSize, setSelecteSize] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  return (
    <Grid container justifyContent={"flex-start"} alignItems={"center"}>
      <Grid item xs={12} md={8}>
        <Title>Rorem ipsum dolor sit amet ipsum dolor sit</Title>
      </Grid>
      <Grid item xs={4} md={4}>
        <Icon src={IconHeart} />
      </Grid>
      <Grid item xs={2}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} />
          ))}
        </div>
      </Grid>
      <Grid item xs={2}>
        <ShortText>(+50 reviews)</ShortText>
      </Grid>
      <Grid item xs={12}>
        <Price>$13.00</Price>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <SubTitle>Size</SubTitle>
      </Grid>
      <Grid item xs={12}>
        <ContainerSizes>
          {Sizes.map((item, index) => {
            return (
              <ButtonSize
                style={{
                  backgroundColor:
                    selectedSize === index ? BLUECOLOR : "rgba(0,0,0,0)",
                  color: selectedSize === index ? "white" : BLUECOLOR,
                }}
                onClick={() => setSelecteSize(index)}
              >
                {item}
              </ButtonSize>
            );
          })}
        </ContainerSizes>
      </Grid>
      <Grid item xs={12}>
        <ContainerMargin>
          <div style={{ marginRight: "1vw" }}>
            <IconRegla src={RegleIcon} />
          </div>
          <YelowText>Size Guide</YelowText>
        </ContainerMargin>
      </Grid>
      <Grid item xs={2}>
        <Grid container alignItems={"center"} justifyContent={"flex-start"}>
          <Grid item xs={3}>
            <Button onClick={() => setAmount(amount < 2 ? 1 : amount - 1)}>
              <p style={{ margin: 0 }}>-</p>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{ fontFamily: PrincipalFont, fontWeight: 600, margin: 0 }}
            >
              {amount}
            </p>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={() => setAmount(amount + 1)}>
              <p style={{ margin: 0 }}>+</p>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={8}>
        <div style={{ margin: "2vw 0" }}>
          <Grid container alignItems={"center"} justifyContent={"space-between"}>
            <Grid item xs={5}>
              <ButtonBlue>
                <p
                  style={{ fontWeight: 600, color: "white", margin: "1.2vw 0" }}
                >
                  Check Out
                </p>
                <div>
                  <Icon
                    style={{
                      marginLeft: "2vw",
                      padding: "0.5vw",
                      borderRadius: 200,
                      border: "solid 1px white",
                      width: "1.2vw",
                      height: "auto",
                    }}
                    src={ArrowIcon}
                  />
                </div>
              </ButtonBlue>
            </Grid>

            <Grid item xs={6}>
              <ButtonWhite>
                <p style={{ fontWeight: 600, color: BLUECOLOR }}>Check Out</p>
                <div>
                  <Icon
                    style={{
                      marginLeft: "2vw",
                      padding: "0.5vw",
                      borderRadius: 200,
                      border: "solid 1px white",
                      width: "2vw",
                      height: "auto",
                    }}
                    src={IconShop}
                  />
                </div>
              </ButtonWhite>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={10}>
        <Card />
      </Grid>
    </Grid>
  );
};
export default DetailProduct;
