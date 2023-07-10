import Banner from "@/components/Banner/Banner";
import Nav from "@/components/Nav/Nav";
import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";
import Information from "./Components/Information";
import Map from "./Components/Map";
import OurStore from "./Components/OurStore";
import { useContact } from "./useContact";

const ContactPage = () => {
  const { content, submitQuestions } = useContact();
  return (
    <main className="main">
      <Nav tab={content} />
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
