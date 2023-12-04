import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import AppItem from "./components/AppItem/AppItem";
import { turtles } from "./constans/turtles";

const getItemDescription = (nickName, weapon) =>
  `${nickName} kills people who don’t learn React with ${weapon}`;

function App() {
  return (
    <AppWrapper title="Tasks 59">
      {turtles.map((turtle, index) => (
        <AppItem
          key={index}
          name={turtle.name}
          description={getItemDescription(turtle.nickName, turtle.weapon)}
          imgUrl={turtle.imgUrl}
        />
      ))}
    </AppWrapper>
  );
}

export default App;
