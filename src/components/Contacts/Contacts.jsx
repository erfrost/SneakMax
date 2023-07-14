import "./Contacts.css";
import circle from "../../assets/circle.svg";
import quest from "../../assets/quest.svg";
import { Tooltip } from "@chakra-ui/react";
import { Clusterer, Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const Contacts = () => {
  const address = [
    {
      id: 1,
      coordinates: [59.939514, 30.292422],
    },
    {
      id: 2,
      coordinates: [59.940947, 30.320692],
    },
    {
      id: 3,
      coordinates: [59.936012, 30.330277],
    },
  ];
  return (
    <div className="Contacts" id="contacts">
      <div className="contacts-content">
        <span className="contacts-title">Контакты</span>
        <div className="office-box">
          <div className="name-with-tooltip">
            <span className="office-name">Главный офис</span>
            <Tooltip
              hasArrow
              placement="top-end"
              label={
                <div className="tooltip">
                  Адрес и телефон для корреспонденции, инвесторов. Вопросы о
                  доставке, качестве обслуживания и товара просьба задавать в
                  отдел продаж.
                </div>
              }
            >
              <div className="tooltip-container">
                <img src={circle} alt="" className="tooltip-circle" />
                <img src={quest} alt="" className="tooltip-quest" />
              </div>
            </Tooltip>
          </div>
          <span className="office-number">+7 800 789 89 89</span>
          <span className="office-address">
            г. Санкт-Петербург, Комсомольская, 43 к1
          </span>
        </div>
        <div className="office-box">
          <span className="office-name">Отдел продаж</span>
          <span className="office-number">+7 800 789 89 89</span>
          <span className="office-address">
            г. Санкт-Петербург, Комсомольская, 43 к1
          </span>
        </div>
      </div>
      <YMaps>
        <Map
          defaultState={{ center: [59.937738, 30.309158], zoom: 13 }}
          width="60%"
          height="425px"
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {address.map((item) => (
              <Placemark
                options={{
                  iconColor: "#484283",
                }}
                key={item.id}
                geometry={item.coordinates}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
};

export default Contacts;
