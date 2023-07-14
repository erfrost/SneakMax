import "./AboutUs.css";
import circles from "../../assets/circles.png";
import image from "../../assets/aboutUs-image.png";

const AboutUs = () => {
  return (
    <div className="AboutUs" id="aboutUs">
      <img src={circles} alt="" className="aboutUs-circles" />
      <div className="aboutUs-title">
        <span className="aboutUs-title-1">Пара слов о нас</span>
        <span className="aboutUs-title-2">
          Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт
          мы можем менять жизни. В том числе с помощью воодушевляющих историй
          спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
        </span>
        <span className="aboutUs-title-autor">
          <div className="autor-wand"></div>
          <span>SneakMax</span>
        </span>
      </div>
      <img src={image} alt="" style={{ zIndex: 99999 }} />
    </div>
  );
};

export default AboutUs;
