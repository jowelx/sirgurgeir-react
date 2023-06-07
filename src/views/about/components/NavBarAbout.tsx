import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import imgLogo from "../../../assets/logo.png";
import IconPerson from "../../../assets/IconPerson.png";
import IconShop from "../../../assets/IconShop.png";
import IconHeart from "../../../assets/IconHeart.png";
import { PrincipalFont } from "../../../fonts/Fonts";
import { motion } from "framer-motion";
import { BLUECOLOR } from "../../../colors/Colors";
const dataNav = [
  { name: "ABOUT", url: "/about" },
  { name: "MEN", url: "/SearchProduct" },
  { name: "WOMEN", url: "/SearchProduct" },
  { name: "EXPLORE", url: "/PrincipalPage" },
  { name: "CONTACT", url: "/contact" },
];
const Logo = styled.img({
  width: "60%",
  height: "auto",
});

const Button = styled.div({
  color: "rgba(0, 23, 48, 1)",
  fontFamily: PrincipalFont,
});
const Container = styled.div({
  position: "absolute",
  left: 0,
  right: 0,
  top: "5vh",
});
const Icon = styled.img({
  width: "1.9vw",
  height: "1.9vw",
});
const Link = styled.a({
  width: "100%",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const Input = styled(motion.input)({
  width: "100%",
  padding: "0.5vw",
  zIndex: 99,
  outline:0,
  borderRadius:2,
  fontSize: "1vw",
  color: BLUECOLOR,
  border: "solid .1vw rgb(100,100,100)",
  backgroundColor: "rgba(0,0,0,0)",
  "&::placeholder": {
    color: BLUECOLOR,
  },
});
const NavBarAbout = () => {
  return (
    <Container>
      <Grid container justifyContent={"space-around"} alignItems={"center"}>
        <Grid item xs={4}>
          <Grid container>
            {dataNav.map((item, index) => {
              return (
                <Grid item xs={2}>
                  <Link href={item.url}>
                    <Button key={index}>{item.name}</Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <a href="/">
            <Logo alt="Sirgurgeir" src={imgLogo} />
          </a>
        </Grid>
        <Grid item xs={4}>
          <Grid container alignItems={"center"}>
            <Grid item xs={6}>
           
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Input
                    type="text"
                    placeholder="Buscar"
                    transition={{ duration: 0.5 }}
                    style={{}}
                  />
                  <div
                    style={{
                      height: "3vw",
                      marginLeft: "1vw",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 99999,
                    }}
                >
                  <Link href="/searchproduct">
                                        <svg
                      style={{
                        textAlign: "right",
                      }}
                      width="1.6vw"
                      height="1.6vw"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1657 2.99992C6.76378 2.44425 3.55557 4.75156 2.99992 8.15343C2.44426 11.5553 4.75157 14.7635 8.15344 15.3192C11.5553 15.8748 14.7635 13.5675 15.3192 10.1657C15.8748 6.76379 13.5675 3.55558 10.1657 2.99992ZM2.09471 8.00557C2.73203 4.10377 6.41171 1.45739 10.3135 2.09471C14.2153 2.73204 16.8617 6.41172 16.2244 10.3135C16.0094 11.6298 15.4481 12.8032 14.6489 13.7559L18.2844 17.4846C18.4612 17.666 18.4575 17.9563 18.2762 18.1331C18.0948 18.3099 17.8045 18.3063 17.6277 18.1249L14.0152 14.4198C12.4522 15.8606 10.2662 16.5936 8.00558 16.2244C4.10378 15.5871 1.4574 11.9074 2.09471 8.00557Z"
                        fill="black"
                      ></path>
                    </svg>
                     </Link>

                  </div>
                </div>
    
            </Grid>
            <Grid item xs={2}>
              <Link href="/wishlist">
                <Icon src={IconHeart} />
              </Link>
            </Grid>

            <Grid item xs={1}>
              <Link href={"/cart"}>
                <Icon src={IconShop} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default NavBarAbout;
