import Banner from "@/components/Banner/Banner";
import Nav from "@/components/Nav/Nav";
import PageContainer from "@/components/PageContainer/PageContainer";
import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Information from "./Components/Information";
import Map from "./Components/Map";
import OurStore from "./Components/OurStore";
import { useContact } from "./useContact";

const ContactPage = () => {
  const { submitQuestions } = useContact();
  return (
    <main className="main">
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item isActive>About</Nav.Item>
      </Nav>
      <Banner bg="/assets/images/contact-header-bg.jpg">
        <h1 className="page-title text-white">
          Contact us <span className="text-white">keep in touch with us</span>
        </h1>
      </Banner>
      <PageContainer className="pb-0">
        <Information prop={submitQuestions} />
        <hr className="mt-4 mb-5" />
        <OurStore />
        <Map />
      </PageContainer>
    </main>
  );
};

export default ContactPage;
