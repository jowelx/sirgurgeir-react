import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BLUECOLOR } from "../../colors/Colors";
const ContainerIcon = styled.div({
    backgroundColor: " rgba(0, 23, 48,0.1)",
    width: '7vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    padding: '1vh',
    alignSelf:"center"
})
const Icon = styled(CheckCircleIcon)({
    fontSize: '7vh',
    color: BLUECOLOR,
    borderRadius: 500,
})
const CheckIcon = () => {
  return (
      <ContainerIcon>
      <Icon/>
    </ContainerIcon>
  );
};
export default CheckIcon;
