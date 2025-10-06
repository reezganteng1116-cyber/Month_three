import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambahkan tugas..."
          className="flex-grow p-2 rounded-lg text-white bg-gray-700"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
        >
          Tambah
        </button>
      </div>

      <ul className="space-y-2">
        {todos.length === 0 && (
          <p className="text-gray-400 text-center">Belum ada tugas.</p>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer flex-1 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
