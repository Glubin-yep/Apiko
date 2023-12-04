import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

//Завдання 2
//Використовуючи підготовлений проект, створити компонент App (в існуючому файлі index.js або в окремому, який імпортувати в існуючий).
//Даний компонент і має рендерити додаток як результат. В компоненті App переписати заданий HTML через React-елементи та React-компоненти.
//Усі статичні текстові дані винести у змінні і поміщати в React-компоненти через вирази (всередині фігурних дужок).
// Те ж саме і з усіма посиланнями.

//Завдання 3
//Описати функцію formatUserName - вона повинна приймати 2 агрументи - (firstName, lastName).
//Дана функція повинна повертати строку, яка містить наступний текст - Welcome to website, <firstName> <lastName>.
//В раніше описаному компоненті App у тегу h2 замінити текст ‘Hello, New Stranger’ даною функцією.
//Результатом має бути вітання ‘Welcome to website, Sara Connor’.
//Добавити в розмітку ще один тег h3, який використовуватиме ту ж функцію і міститеме привітання для John Doe.

// Компонент для елемента списку
const ListItem = ({ tabIndex, children }) => {
  return <li tabIndex={tabIndex}>{children}</li>;
};

// Компонент для елемента списку з посиланням
const LinkedListItem = ({ children, href, target }) => {
  return (
    <li>
      <span>{children}</span>
      <a href={href} target={target} rel="noopener noreferrer">
        It is link to our docs
      </a>
    </li>
  );
};

const ImageListItem = ({ children, src, alt, width }) => {
  return (
    <li>
      <span>{children}</span>
      <img src={src} alt={alt} width={width} />
    </li>
  );
};

const formatUserName = (firstName, lastName) => {
  return `Welcome to website, ${firstName} ${lastName}.`;
};

const App = () => {
  const titleText = "This test text for homework page";
  const greetingText = formatUserName("Sara", "Connor");
  const listHeaderText = "Here we have the list:";
  const linkText = "Here we have text and link!";
  const linkHref = "https://uk.reactjs.org/docs";
  const foxImageSrc =
    "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg";
  const foxImageAlt = "Fox";
  const foxImageWidth = "300";

  return (
    <div className="container">
      <h1 style={{ color: "#dc3545" }}>{titleText}</h1>
      <br />
      <h2>{greetingText}</h2>
      <h3>{formatUserName("John", "Doe")}</h3>
      <br />
      <p>{listHeaderText}</p>
      <ul>
        <ListItem>Just text here</ListItem>
        <LinkedListItem
          href={linkHref}
          target="_blank"
          className="linked-list-item"
        >
          {linkText}
        </LinkedListItem>
        <ImageListItem
          src={foxImageSrc}
          alt={foxImageAlt}
          width={foxImageWidth}
        >
          And the picture!!!
        </ImageListItem>
      </ul>
    </div>
  );
};

export default App;
