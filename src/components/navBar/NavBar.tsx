import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { BLUECOLOR } from "../../colors/Colors";
import { AppContext } from "../../context/AppContext";
import { useHistory } from "react-router-dom";
const Image = styled.img({
  width: "50%",
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
  padding: "0.5vw 0",
  zIndex: 999,
  position: "relative",
  cursor: "pointer",
});
const NavBar = () => {
  const { login, setLogin } = useContext(AppContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    if (login) {
      setLogin(false);
    }
    if(!login){
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.28 3.56C2.98692 3.56 3.56 2.98692 3.56 2.28C3.56 1.57308 2.98692 1 2.28 1C1.57308 1 1 1.57308 1 2.28C1 2.98692 1.57308 3.56 2.28 3.56Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M2.28 11.31C2.98692 11.31 3.56 10.7369 3.56 10.03C3.56 9.32308 2.98692 8.75 2.28 8.75C1.57308 8.75 1 9.32308 1 10.03C1 10.7369 1.57308 11.31 2.28 11.31Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M10.03 11.31C10.7369 11.31 11.31 10.7369 11.31 10.03C11.31 9.32308 10.7369 8.75 10.03 8.75C9.32308 8.75 8.75 9.32308 8.75 10.03C8.75 10.7369 9.32308 11.31 10.03 11.31Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M19.0698 10.03C19.0698 10.7369 18.4967 11.31 17.7898 11.31C17.0828 11.31 16.5098 10.7369 16.5098 10.03C16.5098 9.32308 17.0828 8.75 17.7898 8.75C18.4967 8.75 19.0698 9.32308 19.0698 10.03Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M11.31 2.28C11.31 2.98692 10.7369 3.56 10.03 3.56C9.32308 3.56 8.75 2.98692 8.75 2.28C8.75 1.57308 9.32308 1 10.03 1C10.7369 1 11.31 1.57308 11.31 2.28Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M17.7898 3.56C18.4967 3.56 19.0698 2.98692 19.0698 2.28C19.0698 1.57308 18.4967 1 17.7898 1C17.0828 1 16.5098 1.57308 16.5098 2.28C16.5098 2.98692 17.0828 3.56 17.7898 3.56Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M3.56 17.7898C3.56 18.4967 2.98692 19.0698 2.28 19.0698C1.57308 19.0698 1 18.4967 1 17.7898C1 17.0828 1.57308 16.5098 2.28 16.5098C2.98692 16.5098 3.56 17.0828 3.56 17.7898Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M10.03 19.0698C10.7369 19.0698 11.31 18.4967 11.31 17.7898C11.31 17.0828 10.7369 16.5098 10.03 16.5098C9.32308 16.5098 8.75 17.0828 8.75 17.7898C8.75 18.4967 9.32308 19.0698 10.03 19.0698Z"
                        fill="#231F20"
                      ></path>
                      <path
                        d="M19.0698 17.7898C19.0698 18.4967 18.4967 19.0698 17.7898 19.0698C17.0828 19.0698 16.5098 18.4967 16.5098 17.7898C16.5098 17.0828 17.0828 16.5098 17.7898 16.5098C18.4967 16.5098 19.0698 17.0828 19.0698 17.7898Z"
                        fill="#231F20"
                      ></path>
                    </svg>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    md={3}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <Image src={Logo} />
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <Grid
                      container
                      justifyContent={"flex-end"}
                      alignItems={"center"}
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
                            width="22"
                            height="22"
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
                            x: isActive ? -50 : 200,
                          }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: "absolute",
                            top: "8%",
                            transform: "translateY(50%)",
                            right: 10,
                            padding: "0.5rem",
                            zIndex: 99,
                          }}
                        ></motion.input>
                      </Grid>
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
                          <svg
                            style={{   opacity: login ? 1 : 0,}}
                            width="22"
                            height="22"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.0122 1.95822C7.93466 1.95822 6.37084 3.48269 6.37084 5.29962C6.37084 7.00208 8.01887 8.54102 10.0122 8.54102C12.0056 8.54102 13.6536 7.00208 13.6536 5.29962C13.6536 3.48964 11.9973 1.95822 10.0122 1.95822ZM5.45364 5.29962C5.45364 2.91655 7.48981 1.04102 10.0122 1.04102C12.4271 1.04102 14.5708 2.90959 14.5708 5.29962C14.5708 7.59715 12.4189 9.45822 10.0122 9.45822C7.6056 9.45822 5.45364 7.59715 5.45364 5.29962ZM4.01324 12.6699C4.49339 11.976 5.18596 11.441 6.11224 11.441H13.8122C14.7401 11.441 15.4382 11.9841 15.9257 12.6824C16.411 13.3774 16.7287 14.2768 16.911 15.1426C17.0937 16.0104 17.1492 16.8869 17.081 17.557C17.0474 17.8866 16.9805 18.203 16.8592 18.4482C16.7462 18.6764 16.5052 18.9825 16.0957 18.9582H3.91224C3.50621 18.9582 3.2737 18.6488 3.1604 18.4183C3.03873 18.1706 2.96723 17.854 2.92857 17.5213C2.85026 16.8471 2.89236 15.9737 3.06228 15.111C3.23173 14.2507 3.53653 13.3589 4.01324 12.6699ZM3.99777 18.041C3.99352 18.0333 3.98878 18.0243 3.9836 18.0138C3.92794 17.9005 3.87287 17.7015 3.83965 17.4154C3.77421 16.8521 3.80711 16.0756 3.96219 15.2882C4.11774 14.4985 4.38794 13.7403 4.76749 13.1918C5.14359 12.6482 5.58851 12.3582 6.11224 12.3582H13.8122C14.3343 12.3582 14.7863 12.6526 15.1737 13.2075C15.5634 13.7656 15.8458 14.5349 16.0135 15.3316C16.1808 16.1263 16.2253 16.9061 16.1685 17.4641C16.1396 17.7483 16.0878 17.9389 16.0373 18.041H3.99777ZM4.02389 18.0797C4.02383 18.08 4.02202 18.0784 4.01861 18.074C4.02223 18.0772 4.02394 18.0794 4.02389 18.0797ZM16.0089 18.0896C16.0089 18.0895 16.0099 18.0882 16.0119 18.086C16.0099 18.0887 16.0089 18.0898 16.0089 18.0896Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Grid>
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
                          <CountMarket aria-label="My cart"             style={{   opacity: login ? 1 : 0,}}>
                            <p style={{ margin: 0 }}>0</p>
                          </CountMarket>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                          <ButtonLogin
                            style={{ textAlign: "center" }}
                            onClick={() => handleClick()}
                          >
                            {login ? "Log Out" : "Sign In"}
                          </ButtonLogin>

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
