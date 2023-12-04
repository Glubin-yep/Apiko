// Завдання 2.
//Створити ще один компонент у окремому файлі - AppItem.
//Компонент прийматиме пропси name, description, Image.
//Перші два параметри будуть стрічками, Image - компонент.
//В компоненті AppItem відобразити усе наступним чином - спочатку заголовок даного компонента,
//де показуємо текст пропси name. Знизу під ним компонент Image,
//який приймаємо із параметрів. Ще нижче опис, який відображатиме текст із параметру description.
//Також усе мінімального застилити - невеликі відступи між компонентами, розміри та колір текстових блоків тощо.

import React from 'react';
import PropTypes from 'prop-types';
import CustomImage from '../CustomImage/CustomImage';
import './AppItem.css';

const AppItem = ({ name, description, imgUrl }) => {
  return (
    <div className="app-item">
      <div className="title">{name}</div>
      <div className="image-container">
        <CustomImage imgUrl={imgUrl} />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

AppItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default AppItem;
