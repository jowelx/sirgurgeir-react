import styled from "@emotion/styled";

import EastIcon from "@mui/icons-material/East";
import { BLUECOLOR } from "../../colors/Colors";
export const ArrowLeft = styled(EastIcon)({
  padding: "1.5vh",
  borderRadius: 200,
  border: `solid 1px ${BLUECOLOR}`,
  backgroundColor: "rgba(0,0,0,0)",
  color: BLUECOLOR,
  cursor: "pointer",
  transform: "rotate(180deg)",
  transition: "0.2s ease",
  "&:hover": {
    color: "white",
    backgroundColor: BLUECOLOR,
  },
});
export const ArrowRight = styled(EastIcon)({
  padding: "1.5vh",
  borderRadius: 200,
  border: `solid 1px ${BLUECOLOR}`,
  backgroundColor: "rgba(0,0,0,0)",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.2s ease",
  "&:hover": {
    color: "white",
    backgroundColor: BLUECOLOR,
  },
});