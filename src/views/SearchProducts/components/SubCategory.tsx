import React from "react";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { IconButton } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styledE from "@emotion/styled";
import { PrincipalFont } from "../../../fonts/Fonts";
import { Grid, Divider } from "@mui/material";
import CustomizedCheckbox from "../../../components/UI/CheckBox";
const typeCategory = ["Hoodies", "Jackets", "Sweaters"];
const Container = styledE.div({});
const Title = styledE.p({
  fontSize: "1.2vh",
  margin: 0,
  fontFamily: PrincipalFont,
  fontWeight: 400,
  textAlign: "left",
});
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0)",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
const Category = ["Woman", "Mens", "Kids", "Sporty", "Casual"];
const SubCategory = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      <Container>
        <div>
          {Category.map((item, index) => (
            <div key={index}>
              <Accordion
                style={{ backgroundColor: "rgba(0,0,0,0)" }}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Title>{item}</Title>
                </AccordionSummary>
                <AccordionDetails>
                  {typeCategory.map((item, index) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-star",
                        alignItems: "center",
                      }}
                    >
                      <CustomizedCheckbox />
                      <Title style={{ textAlign: "left" }}>{item}</Title>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default SubCategory;
