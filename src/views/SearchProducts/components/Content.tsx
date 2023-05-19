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
  fontSize: "1vw",
  margin: 0,
});
const TextStrong = styledE.p({
  display: "inline-block",
  fontSize: "1vw",
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
        <Grid item xs={8}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text>Showing &nbsp;</Text>
            <TextStrong>9 &nbsp;</TextStrong>
            <Text>results from total &nbsp;</Text>
            <TextStrong>37&nbsp;</TextStrong>
            <Text>for&nbsp;</Text>
            <TextStrong>"hoodies"</TextStrong>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text>Sort by</Text>

            <CustomSelect
              style={{ width: "8vw" }}
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
        <Grid item xs={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Aplied Filters:</Text>
            <Chip label="Hoodies" variant="outlined" onDelete={handleDelete} />
            <Chip label="$50-$150" variant="outlined" onDelete={handleDelete} />
            <Chip label="Largue" variant="outlined" onDelete={handleDelete} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ minHeight: "70vh", margin: "2vw 0" }}>
            <Grid container spacing={4}>
              {data.map((item, index) => (
                <Grid item xs={4}>
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
