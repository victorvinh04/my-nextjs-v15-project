import BreadcrumbComponent from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import React from "react";

const ContactPage = () => {
  const title = "Contact page";
  return (
    <>
      <BreadcrumbComponent 
      pageName={title}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
