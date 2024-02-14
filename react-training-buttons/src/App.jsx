import { useState } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  // function handleClick(){
  //   setClicked(true)
  // }
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <h2>Parent component</h2>
      <button onClick={handleClick}>Click</button>
      {clicked ? <p>Du har klickat</p> : <p>Du har inte klickat</p>}

      <h3>Click from child:</h3>
      <p>Did click in child</p>
      <p>Did not click in child</p>
      <MyComponent clicked={clicked} />
    </>
  );
}

export default App;
