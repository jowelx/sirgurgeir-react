import * as React from "react";
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
import SubCategory from "./SubCategory";
const Categories = ["Category", "Brands", "Price", "Size"];
const Container = styledE.div({
  border: " 1.5px solid #E8E8E8",
  padding: "2vw",
  borderRadius: 15,
});
const Title = styledE.p({
  fontSize: "1vw",
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

const Filter = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={10}>
        <Container>
          <div>
            {Categories.map((item, index) => (
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
                    {index === 0 && <SubCategory />}
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};
export default Filter;
