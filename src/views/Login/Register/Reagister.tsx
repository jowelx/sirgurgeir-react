import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BLUECOLOR } from "../../../colors/Colors";
import logo from "../../../assets/logo.svg";
import * as Yup from "yup";
import google from "../../../assets/google.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import facebook from "../../../assets/facebook.png";
import bg from "../../../assets/registerbg.png";
import { AppContext } from "../../../context/AppContext";
import EastIcon from "@mui/icons-material/East";
import { useHistory } from 'react-router-dom';
const Logo = styled.img({
  height: "12vh",
  width: "auto",
  display: "flex",
  alignSelf: "flex-start",
  marginTop: "1.5vw",
});
const Title = styled.p({
  color: BLUECOLOR,
  fontWeight: 700,
  fontSize: "7vh",
  textAlign: "left",
  marginBottom: 0,
  marginTop: "1.5vw",
});
const Text = styled.p({
  color: BLUECOLOR,
  margin: 0,
  fontWeight: 500,
  fontSize: "3vh",
  textAlign: "left",
});
const Input = styled(Field)({
  border: 0,
  outline: "none",
  backgroundColor: "rgba(0,0,0,0)",
  borderBottom: "solid 1px rgb(200,200,200)",
  width: "100%",
  marginTop: "3vh",
  padding: "1.11vh",
});
const Button = styled.div({
  backgroundColor: BLUECOLOR,
  color: "white",
  padding: "2vh 1vh",
  width: "100%",
  marginTop: "2vh",
  borderRadius: 8,
  cursor:'pointer'
});
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const ButtonSocial = styled.div({
  width: "96.5%",
  borderRadius: 6,
  border: "solid 1px rgb(232,232,232)",
  color: BLUECOLOR,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2vh",
  margin: "0.5vw 0",
  cursor:'pointer'
});
const Icon = styled.img({
  height: "3vh",
  width: "auto",
});
const ImageBg = styled.img({
  height: "99vh",
  width: "auto",
});
const ContainerImageRegister = styled.div({
  width: "50vw",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
});
const ContainerText = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
});
const ArrowLeft = styled(EastIcon)({
  padding: "1.5vh",
  marginRight: "1vw",
  borderRadius: 200,
  border: `solid 1px white`,
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
  cursor: "pointer",
  transform: "rotate(180deg)",
  transition: "0.2s ease",
  "&:hover": {
    color: BLUECOLOR,
    backgroundColor: "white",
  },
});
const ArrowRight = styled(EastIcon)({
  padding: "1.5vh",
  borderRadius: 200,
  border: `solid 1px white`,
  backgroundColor: "rgba(0,0,0,0)",
  cursor: "pointer",
  color: "white",
  transition: "all 0.2s ease",
  "&:hover": {
    color: BLUECOLOR,
    backgroundColor: "white",
  },
});
const Link = styled.a({
textDecoration:'none'
})
const Register = () => {
  const handleSubmit = (values: any) => {
    console.log(values); // Aquí puedes realizar la lógica de envío del formulario
  };
  const { setLogin } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    setLogin(true);
    localStorage.setItem('login', true.toString());
    history.push('/');
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={10}md={11}>
        <Grid container justifyContent={"space-around"}>
          <Grid item xs={11}md={4}>
            <div style={{paddingTop:'0.1vw'}}>
            <Grid container>
                <Grid item xs={12}>
                  <Link href={"/"}>
                    
                <Logo src={logo} />
                  </Link>
              </Grid>
              <Grid item xs={12} style={{marginTop:'3vw'}}>
                <Title>Welcome back</Title>
              </Grid>
              <Grid item xs={12} style={{marginBottom:'1.5vh'}}>
                <Text>Create an account</Text>
              </Grid>
              <Grid item xs={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }: any) => (
                    <Form>
                      <div>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                      </div>

                      <div>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="E-mail"
                        />
                      </div>

                      <div>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <Button onClick={() => handleClick()} style={{marginBottom:'1vh'}}>
                        Create account
                      </Button>

                
                        <ButtonSocial onClick={() => handleClick()} style={{marginBottom:'1vh'}}>
                          <Grid
                            container
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <Grid item xs={2}>
                              <Icon src={google} />
                            </Grid>
                            <Grid item xs={6}>
                              <p style={{ textAlign: "left", margin: 0 }}>
                                Sign up with google
                              </p>
                            </Grid>
                          </Grid>
                        </ButtonSocial>
                
             
                        <ButtonSocial onClick={() => handleClick()} >
                          <Grid
                            container
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <Grid item xs={2}>
                              <Icon src={facebook} />
                            </Grid>
                            <Grid item xs={6}>
                              <p style={{ textAlign: "left", margin: 0 }}>
                                Sign up with facebook
                              </p>
                            </Grid>
                          </Grid>
                        </ButtonSocial>
          

                      <div>
                        <p
                          style={{
                            margin: 0,
                            display: "inline-block",
                            fontSize: 10,
                          }}
                        >
                          Already have an account?
                        </p>
                        <p
                          style={{
                            fontWeight: 700,
                            margin: 0,
                            display: "inline-block",
                            fontSize: 10,
                          }}
                        >
                          Login
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
            </div>

          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Grid container
                 sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Grid item xs={12}  style={{ display: "flex", justifyContent: "flex-end" }}>
            <ContainerImageRegister>
              <ImageBg src={bg} />
              <ContainerText>
                <Grid container          >
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p
                      style={{
                        color: "white",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: 20,
                      }}
                    >
                      Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br /> Nunc vulputate libero et velit interdum, ac aliquet
                      odio
                      <br /> mattis.
                    </p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "1vw",
                      marginRight: "1vw",
                    }}
                  >
                    <ArrowLeft />
                    <ArrowRight />
                  </Grid>
                </Grid>
              </ContainerText>
            </ContainerImageRegister>
              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Register;
