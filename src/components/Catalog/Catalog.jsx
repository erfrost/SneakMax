/* eslint-disable use-isnan */
import { Checkbox, Input } from "@chakra-ui/react";
import "./Catalog.css";
import { useState } from "react";
import SneakerItem from "../SneakerItem/SneakerItem";

const Catalog = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(999999);
  const [gender, setGender] = useState({
    male: true,
    female: true,
  });

  return (
    <div className="Catalog" id="catalog">
      <div className="title">Каталог</div>
      <div className="catalog-content">
        <div className="filter">
          <span className="filter-title">Подбор по параметрам</span>
          <div className="rangeSlider-container">
            <span className="rangeSlider-title">Цена, руб</span>
            <div className="rangeSlider-viewPrice">
              <div className="price-input-box">
                <Input
                  className="price-input"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="price-input-box">
                <Input
                  className="price-input"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="rangeSlider-container">
            <span className="rangeSlider-title">Пол</span>
            <div className="catalog-checkbox-container">
              <Checkbox
                className="catalog-checkbox"
                value={gender.male}
                onChange={(e) =>
                  setGender((prevState) => ({
                    ...prevState,
                    male: e.target.checked,
                  }))
                }
              >
                Мужской
              </Checkbox>
              <Checkbox
                className="catalog-checkbox"
                value={gender.female}
                onChange={(e) =>
                  setGender((prevState) => ({
                    ...prevState,
                    female: e.target.checked,
                  }))
                }
              >
                Женский
              </Checkbox>
            </div>
          </div>
          <div className="rangeSlider-container">
            <span className="rangeSlider-title">Размер</span>
            <table>
              <tbody>
                <tr>
                  <td>35</td>
                  <td>36</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>39</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>42</td>
                  <td>43</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="catalog-submit-btn">
            <span className="catalog-submit-btn-title">Применить</span>
          </div>
          <span className="catalog-reset-btn">Сбросить</span>
        </div>
        <div className="sneaker-list-container">
          <div className="sneaker-list">
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
            <SneakerItem />
          </div>
          <div className="more-btn">Показать еще</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
