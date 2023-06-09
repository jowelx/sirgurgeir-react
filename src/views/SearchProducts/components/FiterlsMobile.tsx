import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styledE from "@emotion/styled";
import { PrincipalFont } from "../../../fonts/Fonts";
import { Grid } from "@mui/material";
import SubCategory from "./SubCategory";
import Chip from "@mui/material/Chip";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none", // O border: 0;
  },
}));
const Categories = ["Category", "Brands", "Price", "Size"];
const Container = styledE.div({
  border: " 1.5px solid #E8E8E8",
    padding: "2vw",
  borderRadius: 15,
});
const Title = styledE.p({
  fontSize: "1.6vh",
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

const FiltersMobile = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [age, setAge] = React.useState("1");
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const [filter, setFilter] = React.useState(false);
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={11}>
        <Grid container alignItems={"center"}>
          <Grid
            item
            xs={2}
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setFilter(!filter)}
          >
            <FilterAltOutlinedIcon />
            <Title>Filter</Title>
          </Grid>
          <Grid item xs={5} style={{ display: "flex", alignItems: "center" }}>
            <Chip label="Hoodies" variant="outlined" onDelete={handleDelete} />
          </Grid>
          <Grid item xs={5} sx={{ display: { xs: "flex", md: "none" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Title>Sort by</Title>

              <CustomSelect
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>Popularity</MenuItem>
                <MenuItem value={2}>New</MenuItem>
                <MenuItem value={3}>Cost</MenuItem>
              </CustomSelect>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {filter && (
              <Grid item xs={10}>
                  <div style={{position:'relative',backgroundColor:'red',height:'auto',width:'100%'}}>
                             <Container style={{position:'fixed',top:"25%",zIndex:999,backgroundColor:'white'}}>
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
                  </div>
 
        </Grid>
      )}
    </Grid>
  );
};
export default FiltersMobile;
