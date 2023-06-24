import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { BLUECOLOR } from "../../colors/Colors";
import { AppContext } from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import IconHeart from "../../assets/IconHeart.png";
import MenuMobile from "../../views/about/components/MenuMobile";
import MenuIcon from "@mui/icons-material/Menu";
const Image = styled.img({
  width: "40%",
});
const Icon = styled.img({
  width: 25,
  height: 25,
  marginTop: "-0.3vw",
});
const Text = styled.p({
  fontSize: "1.5vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  width: "100%",
});
const Link = styled.a({
  width: "100%",
  fontSize: "1.8vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const CountMarket = styled.button({
  margin: 0,
  background: "transparent",
  padding: 0,
  height: 25,
  width: 25,
  border: "1px solid rgb(10,10,10)",
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
  borderRadius: 200,
  fontWeight: 400,
  fontSize: 13,
});
const Container = styled.header({
  paddingTop: "2.5vh",
  position: "fixed",
  width: "100%",
  backgroundColor: "white",
  transition: ".15s ease",
  zIndex: 999,
});
const WhiteText = styled.p({
  fontSize: "1.7vh",
  fontWeight: 500,
  letterSpacing: 1.5,
  color: "white",
  margin: 0,
});
const SubrayedText = styled(WhiteText)({
  borderBottom: "solid 3px rgb(255,255,255)",
  marginLeft: 5,
});
const BlackContainer = styled.div({
  backgroundColor: "rgb(10,10,10)",
  width: "100%",
  padding: ".89vh 0",
  borderRadius: 200,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});
const ButtonLogin = styled.div({
  backgroundColor: BLUECOLOR,
  color: "white",
  fontWeight: 700,
  width: "100%",
  borderRadius: 200,
  padding: "0.6vw 0",
  zIndex: 999,
  position: "relative",
  cursor: "pointer",
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
const NavBar = () => {
  const { login, setLogin } = useContext(AppContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();
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
  const handleClick = () => {
    if (login) {
      setLogin(false);
    }
    if (!login) {
      history.push("/login");
    }
  };

  const toggleSearchBar = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      setLastScrollTime(Date.now());
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTime]);

  useEffect(() => {
    /* Esperar 250ms desde la última actualización del scroll antes de pegar el navbar */
    const timeoutId = setTimeout(() => {
      if (isScrolled && Date.now() - lastScrollTime > 250) {
        setIsScrolled(true);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [isScrolled, lastScrollTime]);
  return (
    <>
      <MenuMobile toggleDrawer={toggleDrawer} state={state} />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Container style={{ top: isScrolled ? "-6vh" : 0 }}>
            <Grid
              style={{ opacity: isScrolled ? 0 : 1 }}
              container
              justifyContent={"center"}
              alignItems={"center"}
              rowSpacing={5}
            >
              <Grid item md={2} sx={{ display: { xs: "none", md: "flex" } }}>
                <Text style={{ textAlign: "left" }}>
                  UNIFORM OF THE RESTLESS
                </Text>
              </Grid>
              <Grid item xs={10} md={7}>
                <BlackContainer>
                  <WhiteText>ARCHIVE SALE: 50% OFF</WhiteText>
                  <SubrayedText>MEN</SubrayedText>{" "}
                  <SubrayedText>WOMEN</SubrayedText>
                </BlackContainer>
              </Grid>
              <Grid item md={2} sx={{ display: { xs: "none", md: "flex" } }}>
                <Text style={{ textAlign: "right" }}>LOS ANGELES 16:16PST</Text>
              </Grid>
            </Grid>
            <br />

            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              style={{ marginTop: ".4vh", marginBottom: "3vh" }}
            >
              <Grid item xs={11}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid
                    item
                    xs={4}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Grid
                      container
                      justifyContent={"flex-start"}
                      columnSpacing={8}
                    >
                      <Grid item xs={2}>
                        <Link href="/about" style={{ textAlign: "left" }}>
                          ABOUT
                        </Link>
                      </Grid>
                      <Grid item xs={2}>
                        <Link
                          href="/SearchProduct"
                          style={{ textAlign: "left" }}
                        >
                          MEN
                        </Link>
                      </Grid>
                      <Grid item xs={2}>
                        <Link href="/product" style={{ textAlign: "left" }}>
                          WOMEN
                        </Link>
                      </Grid>
                      <Grid item xs={2}>
                        <Link
                          href="/PrincipalPage"
                          style={{ textAlign: "left" }}
                        >
                          EXPLORE
                        </Link>
                      </Grid>
                      <Grid item xs={2}>
                        <Link href="/contact" style={{ textAlign: "left" }}>
                          CONTACT
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{ display: { xs: "flex", md: "none" } }}
                  >
                    <MenuIcon onClick={toggleDrawer("left", true)} />
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    md={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Image src={Logo} style={{ width: "12vh" }} />
                  </Grid>

                  <Grid item xs={4} md={3}>
                    <Grid
                      container
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                      sx={{ display: { xs: "none", md: "flex" } }}
                    >
                      <Grid
                        item
                        xs={2}
                        style={{
                          justifyContent: "flex-end",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            height: "3vw",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 99999,
                            backgroundColor: "white",
                          }}
                        >
                          <svg
                            onClick={() => toggleSearchBar()}
                            style={{
                              textAlign: "right",
                              backgroundColor: "white",
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
                        </div>

                        <motion.input
                          type="text"
                          placeholder="Buscar"
                          initial={{ opacity: 0, x: 200 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive
                              ? window.innerWidth < 1800
                                ? 0.009 * window.innerWidth -
                                  window.innerWidth * 0.05
                                : -0.04 * window.innerWidth
                              : 200,
                          }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: "absolute",
                            top: "0.4vw",
                            transform: "translateY(50vw)",
                            right: 10,
                            padding: "0.5vw",
                            zIndex: 99,
                            fontSize: "1vw",
                          }}
                        ></motion.input>
                      </Grid>
                      {login && (
                        <Grid item xs={2}>
                          <div
                            style={{
                              backgroundColor: "white",
                              height: "3vw",
                              display: "flex",
                              alignItems: "center",
                              position: "relative",
                              zIndex: 99999,
                            }}
                          >
                            {login && (
                              <Link href="/wishlist">
                                <Icon
                                  style={{
                                    opacity: login ? 1 : 0,
                                    marginTop: "0.2vw",
                                  }}
                                  src={IconHeart}
                                />
                              </Link>
                            )}
                          </div>
                        </Grid>
                      )}
                      {login && (
                        <Grid item xs={2}>
                          <div
                            style={{
                              height: "3vw",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              position: "relative",
                              zIndex: 99999,
                              backgroundColor: "white",
                            }}
                          >
                            <Link href="/cart">
                              <CountMarket
                                aria-label="My cart"
                                style={{
                                  opacity: login ? 1 : 0,
                                  cursor: "pointer",
                                }}
                              >
                                <p style={{ margin: 0 }}>0</p>
                              </CountMarket>
                            </Link>
                          </div>
                        </Grid>
                      )}
                      <Grid item xs={4}>
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "white",
                            padding: "0 0.5vw",
                            position: "relative",
                            zIndex: 999,
                          }}
                        >
                          <ButtonLogin
                            style={{ textAlign: "center", fontSize: "1.15vw" }}
                            onClick={() => handleClick()}
                          >
                            {login ? "Log Out" : "Sign In"}
                          </ButtonLogin>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                      sx={{ display: { xs: "flex", md: "none" } }}
                    >
                      <Grid item xs={7}>
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "white",
                            padding: "0 0.5vw",
                            position: "relative",
                            zIndex: 999,
                          }}
                        >
                          <ButtonLogin
                            style={{
                              textAlign: "center",
                              fontSize: "2vh",
                              padding: "0.6vh",
                            }}
                            onClick={() => handleClick()}
                          >
                            {login ? "Log Out" : "Sign In"}
                          </ButtonLogin>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ display: { xs: "flex", md: "none" } }}>
                    <Grid item xs={12} style={{ marginTop: "1.5vh" }}>
                      <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
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
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
export default NavBar;
