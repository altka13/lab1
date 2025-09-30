"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // анхны утга нь 0

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+ Нэмэх</button>
      <button onClick={() => setCount(count - 1)}>- Хасах</button>
       <button onClick={() => setCount(0)}>- reset</button>
    </div>
  );
}