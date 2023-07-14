import "./Team.css";
import image from "../../assets/team-item.png";
import circle from "../../assets/bigRedCircle.png";
import lines from "../../assets/team-lines.png";

const Team = () => {
  return (
    <div className="Team" id="team">
      <img src={circle} alt="" className="team-bg" />
      <img src={lines} alt="" className="team-bg" />
      <span className="team-title">Наша команда</span>
      <div className="team-grid">
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
        <div className="team-grid-item">
          <img src={image} alt="" className="team-grid-image" />
          <span className="team-grid-title-1">Максим Золотарев</span>
          <span className="team-grid-title-2">Администратор</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
