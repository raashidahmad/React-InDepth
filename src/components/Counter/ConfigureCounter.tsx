import { useState } from "react";
import { log } from "../../log";

export const ConfigureCounter = ({ updateChosenCount }: any) => {
    log('<ConfigureCounter />', 1);
    const [enteredNumber, setEnteredNumber] = useState(0);
    
    function handleChange(event: any) {
        setEnteredNumber(+event.target.value);
      }
    
      function handleSetClick() {
        updateChosenCount(enteredNumber);
        setEnteredNumber(0);
      }
    
    return (
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
    );
}