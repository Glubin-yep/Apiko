import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";

const menuItems = [
  {
    title: "Get Start!",
    link: "https://reactjs.org/docs/hello-world.html",
  },
  {
    title: "What is that JSX at all?",
    link: "https://reactjs.org/docs/introducing-jsx.html",
  },
  {
    title: "Render or do not render is the question...",
    link: "https://reactjs.org/docs/rendering-elements.html",
  },
  {
    title: "New big feature for React",
    link: null,
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.title} link={item.link} />
      ))}
    </div>
  );
};

export default Menu;
