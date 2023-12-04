// Завдання 3.
//Створити ще один компонент окремим файлом Image.
//Даний компонент приймати одну пропсу imgUrl - стрічку.
//Відображатиме компонент картинку за допомогою HTML-тегу img,
//у який у якості атрибута src пердамо значення пропси imgUrl.
//Картинку також застилити - фіксовані розміри (500х500 наприклад),
//додати тіні, заокруглити краї за допомогою border-radius.

import React from "react";
import PropTypes from "prop-types";
import "./CustomImage.css";
const CustomImage = ({ imgUrl }) => {
  return <img className="custom-image" src={imgUrl} alt="Custom" />;
};

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default CustomImage;
