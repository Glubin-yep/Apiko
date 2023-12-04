//Завдання 1.
// Окремим файлом створити компонент AppWrapper, який повинен містити обгортку для вашого додатку та заголовок сторінки.
// Даний компонент повинен приймати пропсу title, яку відображатиме у заголовку.
//  Застилити даний компонент - заголовок із текстом розмістити зверху і по центру, додати будь-який колір для заднього фону усієї сторінки,
//  невеликі відступи по краях сторінки. Усі наступні дитячі компоненти, які прийматиме даний компонент через пропсу children,
//  повинні відображатися знизу після заголовку у стовпчик.

import React from "react";
import PropTypes from "prop-types";
import "./AppWrapper.css";

const AppWrapper = ({ title, children }) => {
  return (
    <div className="app-wrapper">
      <div className="title-wrapper">
        <h1>{title}</h1>
      </div>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

AppWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
