import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl w-96">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-400">
            Learn Redux Toolkit
          </h1>

          {/* Todo Input & Button */}
          <AddTodo />

          {/* Todo List */}
          <div className="mt-4">
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
