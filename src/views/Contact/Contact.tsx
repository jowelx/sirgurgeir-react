import React from "react";
import FormContact from "./components/Form";
import Footer from "../../components/footer/Footer";
import NavBarAbout from "../about/components/NavBarAbout";
const Contact = () => {
    return (<>
        <NavBarAbout />
        <br/>    <br/>
        <FormContact />
        <Footer />
    </>)
}
export default Contact;