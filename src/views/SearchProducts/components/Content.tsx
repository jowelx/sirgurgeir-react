import React from "react";
import styledE from "@emotion/styled";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material";
import Chip from "@mui/material/Chip";
import { ReactNode } from "react";
import Pagination from "@mui/material/Pagination";
import { data } from "./DataProducts";
import ProductCard from "../../../components/UI/ProductCard";
import BannerOffert from "../../../components/BannerOfferts";
const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none", // O border: 0;
  },
}));

const Text = styledE.p({
  display: "inline-block",
  fontSize: "2.3vh",
  margin: 0,
});
const TextStrong = styledE.p({
  display: "inline-block",
  fontSize: "2.3vh",
  margin: 0,
  fontWeight: 600,
});
const Content = () => {
  const [page, setPage] = React.useState(1);
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const [age, setAge] = React.useState("1");
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={12} md={8}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Grid container>
              <Grid item xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
                <Text>Showing &nbsp;</Text>
                <TextStrong>9 &nbsp;</TextStrong>
                <Text>results from total &nbsp;</Text>
                <TextStrong>37&nbsp;</TextStrong>
                <Text>for&nbsp;</Text>
                <TextStrong>"hoodies"</TextStrong>
              </Grid>
              <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Text>Showing &nbsp;</Text>
                    <TextStrong>9 &nbsp;</TextStrong>
                    <Text>results from total &nbsp;</Text>
                  </Grid>
                  <Grid item xs={12}>
                    <TextStrong>37&nbsp;</TextStrong>
                    <Text>for&nbsp;</Text>
                    <TextStrong>"hoodies"</TextStrong>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text style={{ width: "100%" }}>Sort by</Text>

            <CustomSelect
              style={{ width: "7vw", padding: 0 }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={1}>Popularity</MenuItem>
              <MenuItem value={2}>New</MenuItem>
              <MenuItem value={3}>Cost</MenuItem>
            </CustomSelect>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={3}>
                <Text>Aplied Filters:</Text>
              </Grid>
              <Grid item xs={6} md={3}>
                <Chip
                  label="Hoodies"
                  variant="outlined"
                  onDelete={handleDelete}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Chip
                  label="$50-$150"
                  variant="outlined"
                  onDelete={handleDelete}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <Chip
                  label="Largue"
                  variant="outlined"
                  onDelete={handleDelete}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ minHeight: "70vh", margin: "2vw 0" }}>
            <Grid container spacing={4}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4}>
                  <ProductCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    sale={item.sale}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={10}
              page={page}
              onChange={handleChangePagination}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Content;
