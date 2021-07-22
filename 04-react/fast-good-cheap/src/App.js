import "./App.css";
import { useState } from "react";
import { SwitchButton } from "./components/SwitchButton";

function App() {
  const states = [
    { name: "fast", state: useState(false) },
    { name: "good", state: useState(false) },
    { name: "cheap", state: useState(false) },
  ];

  const [isFast, isGood, isCheap] = states.map((o) => o.state[0]);

  const toggleSwitchButton = (name) => {
    toggleState(states.filter((o) => o.name === name)[0].state);

    const others = states.filter((o) => o.name !== name);
    const otherAndFalsies = others.filter((o) => o.state[0] === false).length;

    if (otherAndFalsies === 0) {
      if (Math.random() > 0.5) {
        toggleState(others[0].state);
      } else {
        toggleState(others[1].state);
      }
    }
  };

  const toggleState = (state) => {
    const [value, setValue] = state;
    setValue(!value);
  };

  return (
    <div className="App">
      <SwitchButton
        id="btn1"
        label="fast"
        checked={isFast}
        color="red"
        onClick={() => toggleSwitchButton("fast")}
      />
      <SwitchButton
        id="btn2"
        label="good"
        checked={isGood}
        color="green"
        onClick={() => toggleSwitchButton("good")}
      />
      <SwitchButton
        id="btn3"
        label="cheap"
        checked={isCheap}
        color="blue"
        onClick={() => toggleSwitchButton("cheap")}
      />
    </div>
  );
}

export default App;
