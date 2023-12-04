// Завдання 2.
//Створити компонент MenuItem.
//Даний компонент прийматиме параметри title i link - відповідно 
//відображатиме посилання за допомогою HTML-тегу а, 
//де пропса title відображатиметься як текст посилання і пропса link як значення атрибута href.


// Завдання 3.
// Внести наступні зміни до компонента MenuItem:
// нова сторінка по посиланні повинна відкриватись у новому вікні;
// при кліку на дане посилання потрібно виводити значення пропси title у консоль;
// якщо елемент масиву не містить параметру link - відображати звичайний HTML-тег div, 
// який при кліку на нього через alert показуватиме повідомлення “This page is under construction yet”.

import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
      console.log(`Clicked on "${title}" - Opening link in a new window.`);
    } else {
      console.log(`Clicked on "${title}" - This page is under construction.`);
      alert('This page is under construction yet.');
    }
  };

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="menu-item"
        onClick={handleClick}
      >
        {title}
      </a>
    );
  } else {
    return (
      <div className="menu-item" onClick={handleClick}>
        {title}
      </div>
    );
  }
};

export default MenuItem;
