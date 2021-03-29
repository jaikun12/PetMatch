import { render } from "react-dom";
import SearchParams from "./SearchParams";
//import Pet from "./Pet";


// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

const App = () => {
  return (
      <div>
          <h1>Adopt Me</h1>
          {/* <Pet name="Luna" animal="Dog" breed="Havanese"/>
          <Pet name="Chowder" animal="Dog" breed="Chow-Chow"/>
          <Pet name="Sheldon" animal="Cat" breed="Siamese"/> */}
          <SearchParams />;
          <SearchParams />;
          <SearchParams />;
      </div>
  );
};

render(<App />, document.getElementById("root"));