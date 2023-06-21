import React from "react";
import { styled } from "@mui/material/styles";
import styledE from "@emotion/styled";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { BLUECOLOR } from "../../../colors/Colors";
import { Grid } from "@mui/material";
import Heart from "../../../assets/IconHeart.png";
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: BLUECOLOR,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: BLUECOLOR,
  },
});
const ImageProduct = styledE.img({
  width: "100%",
  height: "auto",
  borderRadius: 5,
});
const NameProduct = styledE.p({
  margin: 0,
  textAlign: "left",
});
const PriceProduct = styledE.p({
  fontSize: "2vh",
  color: BLUECOLOR,
  fontWeight: 700,
  margin: 0,
});
const SubTitle = styledE.p({
  fontSize: "2vh",
  fontWeight: 600,
  margin: "1vw 0",
  textAlign: "left",
});
const ButtonSize = styledE.div({
  padding: "0.5vw 2vw",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  borderRadius: 200,
  border: "solid 1px rgb(218, 218, 218, 1)",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  width: "5%",
});
const Button = styledE.div({
  width: "2vw",
  height: "2vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
});
const Color = styledE.div({
  width: "1.5vh",
  height: "1.5vh",
  borderRadius: 500,
});
const Sale = styledE.p({
  position: "absolute",
  backgroundColor: "red",
  top: "-0.8vw",
  left: "0.5vw",
  fontSize: "0.8vw",
  color: "white",
  padding: "0.4vw 1vw",
});
const Icon = styledE.img({
  height: "2vw",
  width: "2vw",
});
const ContainerImage = styledE.div({
  position: "relative",
});
const ProductCart = ({ data, setData, index }: any) => {
  const { state, img, name, size, amount, price, color } = data[index];
  const handleChange = (index: any) => {
    setData((prevData: any) => {
      const newData = [...prevData]; // Crea una copia del array de datos anterior
      const currentValue = newData[index].state;
      console.log(currentValue);
      // Actualiza el campo "state" del objeto en el índice especificado
      newData[index] = {
        ...newData[index], // Copia los valores existentes del objeto
        state: !currentValue, // Actualiza el campo "state" con el nuevo valor
      };

      return newData; // Devuelve el nuevo array de datos actualizado
    });
  };
  return (
    <Grid container alignItems={"center"} style={{ marginTop: "2vw" }}>
      <Grid item xs={1}>
        <Checkbox
          sx={{
            "&:hover": { bgcolor: "transparent" },
          }}
          checked={state}
          onChange={() => handleChange(index)}
          color="default"
          checkedIcon={<BpCheckedIcon />}
          icon={<BpIcon />}
          inputProps={{ "aria-label": "Checkbox demo" }}
        />
      </Grid>
      <Grid item xs={4} md={3}>
        <ContainerImage>
          <ImageProduct src={img} />
          <Sale>Sale</Sale>
          <div style={{ position: "absolute", top: "0.5vh", right: "0.8vh" }}>
            <Icon src={Heart} />
          </div>
        </ContainerImage>
      </Grid>
      <Grid item xs={6} md={7} style={{marginLeft:'1vw'}}>
        <NameProduct>{name}</NameProduct>
        <SubTitle>Size</SubTitle>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={2}md={2}>
            <ButtonSize>{size}</ButtonSize>
          </Grid>
          <Grid item xs={3} md={3}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"flex-start"}
              style={{
                border: "solid 1px rgb(218, 218, 218, 1)",
                borderRadius: 600,
              }}
            >
              <Grid item xs={4}>
                <Button
                  onClick={() =>
                    setData((prevData: any) => {
                      const newData = [...prevData]; // Crea una copia del array de datos anterior
                      const currentValue = newData[index].state;
                      console.log(currentValue);
                      // Actualiza el campo "state" del objeto en el índice especificado
                      newData[index] = {
                        ...newData[index], // Copia los valores existentes del objeto
                        amount: amount < 2 ? 1 : amount - 1, // Actualiza el campo "state" con el nuevo valor
                      };

                      return newData; // Devuelve el nuevo array de datos actualizado
                    })
                  }
                  style={{
                    borderRight: "solid 1px rgb(218, 218, 218, 1)",
                  }}
                >
                  <p style={{ margin: 0 }}>-</p>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <p style={{ fontWeight: 600, margin: 0 }}>{amount}</p>
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={() =>
                    setData((prevData: any) => {
                      const newData = [...prevData]; // Crea una copia del array de datos anterior
                      const currentValue = newData[index].state;
                      console.log(currentValue);
                      // Actualiza el campo "state" del objeto en el índice especificado
                      newData[index] = {
                        ...newData[index], // Copia los valores existentes del objeto
                        amount: amount + 1, // Actualiza el campo "state" con el nuevo valor
                      };

                      return newData; // Devuelve el nuevo array de datos actualizado
                    })
                  }
                  style={{
                    borderLeft: "solid 1px rgb(218, 218, 218, 1)",
                  }}
                >
                  <p style={{ margin: 0 }}>+</p>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <PriceProduct>${price * amount}</PriceProduct>
          </Grid>
        </Grid>
        <SubTitle>Color</SubTitle>
        <Color style={{ backgroundColor: color }} />
      </Grid>
    </Grid>
  );
};
export default ProductCart;
