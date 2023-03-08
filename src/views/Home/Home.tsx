import React from "react";
import Grid from "@mui/material/Grid";
import Video from "./components/Video";
import OurProducts from "./components/OurProducts";
import CategoriesSection from "./components/CategoriesSection";
import OurHoodieSection from "./components/OurHoodieSection";
import OurTeeSection from "./components/OurTeeSection";
import HeadTo from "./components/HeadTo";
import FAQGS from "./components/FAQS";
import Contact from "./components/Contact";
import CarouselSection from "./components/Carousel";
const Home = () => {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Video />
        </Grid>
        <Grid item xs={11}>
          <OurProducts />
        </Grid>
        <Grid item xs={12}>
          <CategoriesSection />
        </Grid>
        <Grid item xs={11}>
          <OurHoodieSection />
        </Grid>
        <Grid item xs={11}>
          <OurTeeSection/>
        </Grid>
        <Grid item xs={12}>
<HeadTo/>
        </Grid>
        <Grid item xs={11}>
<FAQGS/>
        </Grid>
        <Grid item xs={12}>
<CarouselSection/>
        </Grid>
        <Grid item xs={11}>
<Contact/>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
