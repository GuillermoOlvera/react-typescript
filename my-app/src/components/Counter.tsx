import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = ( number:number ):void => {
        setCounter(counter + number);
    }

  return (
    <div className="mt-5">
        <h3>Counter: useState</h3>
        <span>{ counter }</span>
        <br />
        <button className="btn btn-outline-primary mt-2" onClick={ () => increment(1) }>+1</button>
        <button className="btn btn-outline-primary mt-2" onClick={ () => increment(2) }>+2</button>
        <button className="btn btn-outline-danger mt-2" onClick={ () => increment(0) }>Reset</button>
    </div>
  )
}
