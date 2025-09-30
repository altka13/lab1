"use client";
import { useState } from "react";
import Layout from "@/components/Layout"
export default function Counter() {
  const [count, setCount] = useState(0); 

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const multiply = () => setCount(count * 2);
  const divide = () => setCount(Math.floor(count / 2)); 
  const reset = () =>setCount(0)
  return (<Layout>
    <div>
      <h1>Count: {count}</h1>
      <div  style={{  display: 'flex', textAlign: 'center', gap: '20px', marginTop:"20px" }}>
      <button onClick={increment}>nemeh</button>
      <button onClick={decrement}> hasah</button>
      <button onClick={multiply}>urjih</button>
      <button onClick={divide}>huwaah</button>
      <button onClick={reset}>reset</button>
      </div>
    </div>
  </Layout>);
}
