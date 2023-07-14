import { Input } from "@chakra-ui/react";
import "./Feedback.css";
import instagram from "../../assets/instagram.svg";
import inst_1 from "../../assets/instagram-1.png";
import inst_2 from "../../assets/instagram-2.png";
import inst_3 from "../../assets/instagram-3.png";
import inst_4 from "../../assets/instagram-4.png";
import inst_5 from "../../assets/instagram-5.png";

const Feedback = () => {
  return (
    <div className="Feedback">
      <div className="feedback-forms">
        <span className="feedback-forms-title-1">Есть вопросы?</span>
        <span className="feedback-forms-title-2">
          Заполните форму и наш менеджер свяжется с вами
        </span>
        <div className="feedback-forms-box">
          <Input
            className="form-input"
            placeholder="Ваше имя"
            style={{ fontWeight: 400 }}
          />
          <Input
            className="form-input"
            placeholder="Номер телефона"
            style={{ fontWeight: 400 }}
          />
          <div className="feedback-btn">Отправить</div>
        </div>
      </div>
      <div className="instagram">
        <img src={instagram} alt="" />
        <div className="instagram-images">
          <img src={inst_1} alt="" style={{ gridArea: "inst1" }} />
          <img src={inst_2} alt="" style={{ gridArea: "inst2" }} />
          <img
            src={inst_3}
            alt=""
            style={{ gridArea: "inst3", height: "100%" }}
          />
          <img src={inst_4} alt="" style={{ gridArea: "inst4" }} />
          <img src={inst_5} alt="" style={{ gridArea: "inst5" }} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
