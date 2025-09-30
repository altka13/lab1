localStorage.setItem("key", "value");
const value = localStorage.getItem("key");
console.log(value); // "value"
localStorage.removeItem("key");
localStorage.clear();
 const todos = ["task1", "task2"];
localStorage.setItem("todos", JSON.stringify(todos));
const saved = localStorage.getItem("todos");
const parsed = saved ? JSON.parse(saved) : [];
console.log(parsed); // ["task1", "task2"]
