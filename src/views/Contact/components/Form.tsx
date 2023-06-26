import React from "react";
import { Grid } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "../../../components/UI/TextField";
import styled from "@emotion/styled";
import { BLUECOLOR, YELLOWCOLOR } from "../../../colors/Colors";
import LogoWhite from "../../../assets/logo.svg";
import bgI from "../../../assets/backgorundImage.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import fb from "../../../assets/fb.png";
import ig from "../../../assets/ig.png";
import tw from "../../../assets/tw.png";
const info = [
  {
    icon: "phone",
    text: "00040004004",
  },
  {
    icon: "mail",
    text: "Loremipsumdolor@gmail.com",
  },
  {
    icon: "maps",
    text: "Lorem ipsum dolor sit amet consectetur. Egestas vitae egestas auctor tellus hendrerit massa.",
  },
];
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  notes: Yup.string().required("Notes are required"),
});
const ContainerBlue = styled.div({
  width: "100%",
  backgroundColor: BLUECOLOR,
  padding: "1vw 2vw",
  borderRadius: "0vw 10px 10px 0vw",
});
const ContainerBlueRounded = styled.div({
  width: "100%",
  backgroundColor: BLUECOLOR,
  padding: "1vw 2vw",
  borderRadius: "10px",
});
const FormContact = () => {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    notes: "",
  };

  const handleSubmit = (values: any) => {
    // Lógica para enviar el formulario
    console.log(values);
  };
  const Button = styled.button({
    width: "100%",
    color: BLUECOLOR,
    backgroundColor: YELLOWCOLOR,
    borderRadius: 4,
    border: 0,
    fontSize: "1.2vw",
    fontWeight: 600,
    padding: "0.8vw 0",
    transition: "all 0.2s ease",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.9,
    },
  });
  const Logo = styled.img({
    width: "100%",
  });
  const ContainerImage = styled.div({
    backgroundImage: `url(${bgI})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "10px 0px 0px 10px",
  });
  const Title = styled.p({
    fontSize: "3vw",
    fontWeight: 600,
    color: "white",
    margin: 0,
    textAlign: "left",
  });
  const Text = styled.p({
    fontSize: 15,
    color: "white",
    textAlign: "left",
    margin: 0,
  });
  const SocialImage = styled.img({
    width: "auto",
    height: "2vw",
    padding: "0.5vw",
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: "1vw",
  });
  const Tittle = styled.p({
        fontSize: "3vw",
    fontWeight: 600,
    color: "white",
    margin: 0,
    textAlign: "center",
  })
  return (
    <Grid container justifyContent={"center"} >
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12} md={6}  sx={{ display: { xs: "none", md: "flex" } }}>
            <ContainerImage>
              <div style={{    borderRadius: "10px 0px 0px 10px", backgroundColor: 'rgba(50,50,50,0.5)', height: '100%', backdropFilter: 'blur(2px)' }}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"space-around"}
                style={{ height: "100%" }}
              >
                <Grid item xs={10} style={{marginTop:'2vw'}}>
                  <Title>GET IN TOUCH</Title>
                  <Text>
                    WE’re open for any suggestion or just to have a chat
                  </Text>
                </Grid>
                <Grid item xs={10} style={{ marginTop: "1vh"}}>
                  {info.map((item, index) => (
                    <Grid
                      container
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      style={{ margin: "1.5vw 0" }}
                    >
                      <Grid item xs={2}>
                        {item.icon === "phone" && (
                          <LocalPhoneIcon
                            style={{
                              color: "white",
                              fontSize: "2vw",
                              marginRight: "2vw",
                            }}
                          />
                        )}
                        {item.icon === "mail" && (
                          <EmailIcon
                            style={{
                              color: "white",
                              fontSize: "2vw",
                              marginRight: "2vw",
                            }}
                          />
                        )}
                        {item.icon === "maps" && (
                          <FmdGoodIcon
                            style={{
                              color: "white",
                              fontSize: "2vw",
                              marginRight: "2vw",
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item xs={10}>
                        <Text>{item.text}</Text>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <Grid item xs={10} style={{ marginTop: "4vw" }}>
                  <Text>FOLLOW US!</Text>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "1vw",
                    }}
                  >
                    <SocialImage src={fb} />
                    <SocialImage src={ig} />
                    <SocialImage src={tw} />
                  </div>
                </Grid>
              </Grid>
              </div>

            </ContainerImage>
          </Grid>
          <Grid item xs={12}md={6} sx={{display:{xs:'none',md:'flex'}}}>
            <ContainerBlue>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }: any) => (
                  <Form>
                    <Grid container justifyContent={"center"} rowSpacing={2}>
                      <Grid item xs={8}>
                        <Tittle>
                          Contact us!
                        </Tittle>
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          name="name"
                          placeholder="Name"
                          error={errors.name}
                          touched={touched.name}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="lastName"
                          placeholder="Last Name"
                          error={errors.lastName}
                          touched={touched.lastName}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="email"
                          placeholder="E-mail"
                          error={errors.email}
                          touched={touched.email}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="notes"
                          placeholder="Notes"
                          error={errors.notes}
                          touched={touched.notes}
                          textarea
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button type="submit" style={{fontSize:'2vh'}}>Send</Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </ContainerBlue>
          </Grid>
              <Grid item xs={12}md={6} sx={{display:{xs:'flex',md:'none'}}}>
            <ContainerBlueRounded>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }: any) => (
                  <Form>
                    <Grid container justifyContent={"center"} rowSpacing={2}>
                      <Grid item xs={8}>
                        <Tittle>
                          Contact us!
                        </Tittle>
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          name="name"
                          placeholder="Name"
                          error={errors.name}
                          touched={touched.name}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="lastName"
                          placeholder="Last Name"
                          error={errors.lastName}
                          touched={touched.lastName}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="email"
                          placeholder="E-mail"
                          error={errors.email}
                          touched={touched.email}
                        />
                      </Grid>

                      <Grid item xs={10}>
                        <TextField
                          name="notes"
                          placeholder="Notes"
                          error={errors.notes}
                          touched={touched.notes}
                          textarea
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button type="submit" style={{fontSize:'2vh'}}>Send</Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </ContainerBlueRounded>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FormContact;
