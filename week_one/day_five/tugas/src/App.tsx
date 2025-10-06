import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ContactForm from "./components/ContactForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center gap-10 py-10">
      <h1 className="text-3xl font-bold"> Tugas React (useState + TypeScript + Tailwind)</h1>

      <Counter />
      <UserProfile />
      <ContactForm />
      <TodoList />
    </div>
  );
}

export default App;
