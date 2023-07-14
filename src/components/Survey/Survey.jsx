import { useState } from "react";
import Quests from "../Quests/Quests";
import iphone from "../../assets/iphone.png";
import iphoneSuccess from "../../assets/iphone-success.png";
import "./Survey.css";
import { Input } from "@chakra-ui/react";

const Survey = () => {
  const [questNumber, setQuestNumber] = useState(1);

  const onSubmit = () => {
    const elem = document.querySelector("#iphone-success");
    elem.classList.add("success");
  };

  return (
    <div className="Survey-container" id="survey">
      <div className="Survey-content">
        <div className="survey-title">
          <span className="survey-title-1">
            {questNumber === 4
              ? "Ваша подборка готова!"
              : "Мы подберем идеальную пару для вас"}
          </span>
          <span className="survey-title-2">
            {questNumber === 4
              ? "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог"
              : "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями "}
          </span>
        </div>
        {questNumber === 4 ? (
          <div className="survey-quest">
            <div className="divider" />
            <div className="finally-forms">
              <div className="finally-forms-left">
                <span className="forms-left-title-1">Получить предложение</span>
                <span className="forms-left-title-2">
                  Получите подборку подходящих для вас моделей на почту
                </span>
                <div className="forms-container">
                  <Input className="form-input" />
                  <Input className="form-input" />
                </div>
                <div className="finally-btn" onClick={onSubmit}>
                  Получить
                </div>
              </div>
              <div className="iphone-box">
                <img src={iphone} alt="" />
                <img
                  src={iphoneSuccess}
                  alt=""
                  className="iphone-success"
                  id="iphone-success"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="survey-quest">
            <div className="divider" />
            <Quests questNumber={questNumber} />
            <div className="divider" />
            <div className="next-block">
              <div className="quest-number">{questNumber} из 3</div>
              <div
                className="next-btn"
                onClick={() => setQuestNumber(questNumber + 1)}
              >
                Следующий шаг
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
