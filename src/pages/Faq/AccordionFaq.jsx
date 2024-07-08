import { AddRounded, RemoveRounded } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const AccordionFaq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="w-full cont-accordion px-32 py-12">
        <div
          className="text-center flex gap-4 flex-col mb-7 aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Typography variant="caption" color="primary">
            FAQ
          </Typography>
          <Typography variant="h3">AiMentor FAQs</Typography>
        </div>
        <div
          className="aos-init aos-animate "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              "&.MuiAccordion-root": {
                borderBottom:
                  expanded === "panel1"
                    ? "0px solid #262626"
                    : "1px solid #262626",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveRounded sx={{ color: "#00FCC6" }} />
                ) : (
                  <AddRounded />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ color: expanded === "panel1" ? "#00FCC6" : "unset" }}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                What is AiMentor Graphic Generator?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="GrayText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum aliquid eligendi velit doloribus, dolores obcaecati
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              "&.MuiAccordion-root": {
                borderBottom:
                  expanded === "panel2"
                    ? "0px solid #262626"
                    : "1px solid #262626",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel2" ? (
                  <RemoveRounded sx={{ color: "#00FCC6" }} />
                ) : (
                  <AddRounded />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ color: expanded === "panel2" ? "#00FCC6" : "unset" }}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                What's the Standard Image Size?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="GrayText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum aliquid eligendi velit doloribus, dolores obcaecati
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              "&.MuiAccordion-root": {
                borderBottom:
                  expanded === "panel3"
                    ? "0px solid #262626"
                    : "1px solid #262626",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel3" ? (
                  <RemoveRounded sx={{ color: "#00FCC6" }} />
                ) : (
                  <AddRounded />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ color: expanded === "panel3" ? "#00FCC6" : "unset" }}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                What photo formats are supported?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="GrayText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum aliquid eligendi velit doloribus, dolores obcaecati
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              "&.MuiAccordion-root": {
                borderBottom:
                  expanded === "panel4"
                    ? "0px solid #262626"
                    : "1px solid #262626",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel4" ? (
                  <RemoveRounded sx={{ color: "#00FCC6" }} />
                ) : (
                  <AddRounded />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ color: expanded === "panel4" ? "#00FCC6" : "unset" }}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                How can I get the best results?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="GrayText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum aliquid eligendi velit doloribus, dolores obcaecati
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AccordionFaq;
