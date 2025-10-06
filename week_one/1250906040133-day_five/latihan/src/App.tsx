import React from "react";
import SetCounter from "./components/setCounter"
import ContactForm from "./components/contactForm";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6"> Aplikasi SetCounter (TypeScript + Tailwind)</h1>
      <SetCounter />
      <h1 className="text-3xl font-bold mb-6"> Aplikasi ContatForm (TypeScript + Tailwind)</h1>
      <ContactForm />
      <h1 className="text-3xl font-bold mb-6"> Aplikasi To-Do List (TypeScript + Tailwind)</h1>
      <TodoApp />
    </div>
  );
};

export default App;
