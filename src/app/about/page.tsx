import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import BreadcrumbComponent from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  const title = "About page";
  return (
    <>
      <BreadcrumbComponent
        pageName={title}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
