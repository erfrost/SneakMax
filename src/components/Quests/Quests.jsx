/* eslint-disable react/prop-types */
import "./Quests.css";
import quest1 from "../../assets/quest-1.png";
import quest2 from "../../assets/quest-2.png";
import { Checkbox } from "@chakra-ui/react";

const Quests = ({ questNumber }) => {
  if (questNumber === 1) {
    return (
      <>
        <div className="quest-title">Какой тип кроссовок рассматриваете?</div>
        <div className="quest-1-container">
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
          <div className="quest-1-item">
            <img src={quest1} alt="" />
            <Checkbox className="catalog-checkbox">Кеды</Checkbox>
          </div>
        </div>
      </>
    );
  }
  if (questNumber === 2) {
    return (
      <>
        <div className="quest-title">Какой размер вам подойдет?</div>
        <div className="quest-2-container">
          <div className="quest-2-checkboxes">
            <Checkbox className="catalog-checkbox">менее 36</Checkbox>
            <Checkbox className="catalog-checkbox">36-38</Checkbox>
            <Checkbox className="catalog-checkbox">39-41</Checkbox>
            <Checkbox className="catalog-checkbox">42-44</Checkbox>
            <Checkbox className="catalog-checkbox">45 и больше</Checkbox>
          </div>
          <img src={quest2} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </>
    );
  }
  if (questNumber === 3) {
    return (
      <>
        <div className="quest-title">Уточните какие-либо моменты</div>
        <textarea className="textarea" placeholder="Введите сообщение" />
      </>
    );
  }
};

export default Quests;
