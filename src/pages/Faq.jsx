import AccordionFaq from "./Faq/AccordionFaq";
import FaqTitle from "./Faq/FaqTitle";
import "./Faq/style.css";
import BlogsHome from "./home/BlogsHome";
const Faq = () => {
  return (
    <>
      <FaqTitle />

      <AccordionFaq />

      <BlogsHome />
    </>
  );
};

export default Faq;
