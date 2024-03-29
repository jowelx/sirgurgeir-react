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
import { data,dataWishlist } from "./DataProducts";
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

        <Grid item xs={12}>
          <div style={{ minHeight: "70vh", }}>
            <Grid container  >
              {dataWishlist.map((item, index) => (
                <Grid item xs={6} md={3} sx={{ px: { xs: 1, md: 2 }, py: { xs: 2, md: 4 } }}>
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
