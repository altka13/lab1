// app/todo/page.tsx

'use client';

import { useEffect, useState } from 'react';
import Layout from "@/components/Layout"
interface Todo {
  id: number;
  text: string;
  done: boolean;
  dueDate?: string;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState<'all' | 'done' | 'not_done'>('all');
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newItem: Todo = {
      id: Date.now(),
      text: newTodo,
      done: false,
      dueDate: dueDate || undefined,
    };
    setTodos([newItem, ...todos]);
    setNewTodo('');
    setDueDate('');
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const toggleDone = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.done;
    if (filter === 'not_done') return !todo.done;
    return true;
  });

  return (<Layout>
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>📝 Todo List</h1>

      <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Шинэ todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTodo}>Нэмэх</button>
      </div>

      <div style={{display: 'flex', textAlign:"center", marginBottom: 20, gap:50 }}>
        <button onClick={() => setFilter('all')}>Бүгд</button>
        <button onClick={() => setFilter('done')}>Дууссан</button>
        <button onClick={() => setFilter('not_done')}>Хийгдээгүй</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{
            marginBottom: 10,
            padding: 10,
            border: '1px solid #ccc',
            borderRadius: 4,
            background: todo.done ? '#ffe0faff' : '#fff'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                />{' '}
                <strong style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                  {todo.text}
                </strong>
                {todo.dueDate && (
                  <small style={{ marginLeft: 10, color: '#888' }}>
                    📅 {todo.dueDate}
                  </small>
                )}
              </div>
              <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>Устгах</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Layout>);
}
