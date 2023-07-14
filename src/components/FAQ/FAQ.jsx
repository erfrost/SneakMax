/* eslint-disable react-refresh/only-export-components */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import "./FAQ.css";
import plus from "../../assets/plus.svg";
import { useState } from "react";

const FAQ = () => {
  const [accordionActive1, setAccordionActive1] = useState(true);
  const [accordionActive2, setAccordionActive2] = useState(false);

  return (
    <div className="FAQ" id="FAQ">
      <span className="FAQ-title">Часто задаваемые вопросы</span>
      <div className="accordions-list">
        <Accordion defaultIndex={[0]} allowMultiple width="50%">
          <AccordionItem>
            <h2>
              <AccordionButton
                onClick={() => setAccordionActive1((prevState) => !prevState)}
              >
                <Box as="span" flex="1" textAlign="left">
                  Вопрос 1
                </Box>
                <img
                  src={plus}
                  alt=""
                  id="plus-icon-1"
                  className={
                    accordionActive1 ? "accordion-active" : "accordion-disable"
                  }
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              А это ответ 1: в комплексе функционируют 6 детских садов с
              площадками, воспитателями и всякими другими людьми
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                onClick={() => setAccordionActive2((prevState) => !prevState)}
              >
                <Box as="span" flex="1" textAlign="left">
                  Вопрос 2
                </Box>
                <img
                  src={plus}
                  alt=""
                  id="plus-icon-2"
                  className={
                    accordionActive2 ? "accordion-active" : "accordion-disable"
                  }
                />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              А это ответ 1: в комплексе функционируют 6 детских садов с
              площадками, воспитателями и всякими другими людьми
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
