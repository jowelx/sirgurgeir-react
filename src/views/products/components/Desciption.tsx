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
import { Grid } from "@mui/material";
const Data = [
  {
    label: "Color",
    res: "White",
  },
  {
    label: "Pattern Type",
    res: "Plain",
  },
  {
    label: "Details",
    res: "Drawstring, Tie Fron",
  },
  {
    label: "Fit Type",
    res: "Regular Fit",
  },
  {
    label: "Features",
    res: "Crochet",
  },
  {
    label: "Fabric",
    res: "Slight Stretch",
  },
  {
    label: "Material",
    res: "Knitted Fabric",
  },
  {
    label: "Composition",
    res: "100% Polyester",
  },
  {
    label: "Care Instructions",
    res: "Machine wash or professional dry clean",
  },
  {
    label: "Sheer",
    res: "Semi-Sheer",
  },
];
const DataText = styledE.p({
  color: "rgba(94, 94, 94, 1)",
  textAlign: "left",
  margin: "0.2vw 0",
  fontSize: "1.4vh",
});
const PrincipalTitle = styledE.p({
  fontSize: "4vh",
  margin: 0,
  fontFamily: PrincipalFont,
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "2vw",
  marginTop:'-1.5vh'
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

export default function Description() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <PrincipalTitle>Description</PrincipalTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Grid style={{ marginTop: "-2vw" }} container>
            {Data.map((item, index) => (
              <Grid item xs={12}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={4}>
                    <DataText>{item.label}:</DataText>
                  </Grid>
                  <Grid item xs={5}>
                    <DataText>{item.res} </DataText>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
