// Counter.js
import { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
  
    const handlerPlus = () => {
      setCount(prevCount => {
        return (prevCount + 1)
      });
    };
    const handlerMinus = () => {
      setCount(prevCount => {
        return (prevCount - 1) > 0 ? (prevCount - 1):0;
      });
    };

    const Reset = () =>{
      setCount(0)
    }
  
    return (
      <>
        <button onClick={handlerMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlerPlus}>+</button>
        <button onClick={Reset}>Reset</button>
      </>
    );
  }
  export default Counter;