import React,{useState} from 'react';
import './style.css';
import Counter from './Counter1'
import Counter1 from './Counter2'


export default function App() {
  const[initialValue, setInitialValue] = useState(5);
  const handleIncrement =()=>{
    setInitialValue(initialValue +1);
  
  }
  const handleDecrement=()=>{
    setInitialValue(initialValue -1);
  
  }
  const handlerest=()=>{
    setInitialValue(5);
  
  }
  return (
    <>
      <div>
        Initial Value:{initialValue}<br/>
        <button onClick={handleIncrement}>Increment</button> &nbsp;
        <button onClick={handleDecrement}>decrement</button>&nbsp;
        <button onClick={handlerest}>reset</button>&nbsp;

      </div>
      <Counter/>
      <Counter1/>
      
    </>
  );
}
