import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("blue").all(10)); // this 10 will help in generating the colors by 10% difference.
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      /*10 here means we will have Tint and Dark 
      shades 100% divided by 10 , since we gave it 10 it divides the colors by 10 and thats why these
      tints and shades are changing by 10% i.e 100%-90%-80%-70% and so on. */
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`} // if error is True Then Run the Error Css else dont do anything/
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      ;
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            ></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
