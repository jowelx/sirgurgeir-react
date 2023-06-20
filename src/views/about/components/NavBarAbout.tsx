import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Grid ,Badge} from "@mui/material";
import imgLogo from "../../../assets/logo.svg";
import IconPerson from "../../../assets/IconPerson.png";
import IconShop from "../../../assets/IconShop.png";
import IconHeart from "../../../assets/IconHeart.png";
import { PrincipalFont } from "../../../fonts/Fonts";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import MenuMobile from "./MenuMobile";
import { BLUECOLOR } from "../../../colors/Colors";
import { AppContext } from "../../../context/AppContext";
import BadgeCustom from "../../../components/UI/BadgeCustom";
const dataNav = [
  { name: "ABOUT", url: "/about" },
  { name: "MEN", url: "/SearchProduct" },
  { name: "WOMEN", url: "/SearchProduct" },
  { name: "EXPLORE", url: "/PrincipalPage" },
  { name: "CONTACT", url: "/contact" },
];
const Logo = styled.img({
  width: "50%",
  height: "auto",
});

const Button = styled.div({
  color: "rgba(0, 23, 48, 1)",
  fontFamily: PrincipalFont,
});
const Container = styled.div({
  left: 0,
  right: 0,
  marginTop: "2vh",
  marginBottom: "2vh",
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
  outline: 0,
  borderRadius: 2,
  fontSize: "1vw",
  color: BLUECOLOR,
  border: "solid .1vw rgb(100,100,100)",
  backgroundColor: "rgba(0,0,0,0)",
  "&::placeholder": {
    color: BLUECOLOR,
  },
});
const ButtonLogin = styled.div({
  backgroundColor: BLUECOLOR,
  color: "white",
  fontWeight: 700,
  borderRadius: 200,
  padding: "0.6vw 0",
  zIndex: 999,
  position: "relative",
  cursor: "pointer",
});
const NavBarAbout = () => {
  const {login}=useContext(AppContext)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: any, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <Container>
      <MenuMobile toggleDrawer={toggleDrawer} state={state} />
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
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
           {login&& <Grid item xs={1}>
              <Link href="/wishlist">
                <Icon src={IconHeart} />
              </Link>
            </Grid>}

           {login&&  <Grid item xs={1}>
              <Link href={"/cart"}>
                <BadgeCustom>
                <Icon src={IconShop} />
                </BadgeCustom> 
              </Link>
            </Grid>}
            <Grid item xs={2}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "0 0.5vw",
                  position: "relative",
                }}
              >
                <Link href={!login?"/login":undefined}>
                  <ButtonLogin
                    onClick={()=>login?localStorage.removeItem('login'):null}
                  style={{
                    textAlign: "center",
                    fontSize: "2vh",
                    padding: "0.6vh",
                  }}
                >
                 {login ? "Log Out" : "Sign In"}
                </ButtonLogin>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Grid item xs={3}>
          <MenuIcon onClick={toggleDrawer("left", true)} />
        </Grid>
        <Grid item xs={5}>
          <a href="/">
            <Logo alt="Sirgurgeir" src={imgLogo} style={{ width: "100%" }} />
          </a>
        </Grid>
        <Grid item xs={3}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item xs={10}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "0 0.5vw",
                  position: "relative",
                }}
              >
                <ButtonLogin
                  style={{
                    textAlign: "center",
                    fontSize: "2vh",
                    padding: "0.6vh",
                  }}
                >
                  Sig In
                </ButtonLogin>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{marginTop:'1.5vh'}}>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={8}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "1vh",
                }}
              >
                <Input
                  type="text"
                  placeholder="Buscar"
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: "2.4vh",
                    borderRadius: "0.6vh",
                    padding: "1vh",
                  }}
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
                      width="3vh"
                      height="3vh"
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
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default NavBarAbout;
