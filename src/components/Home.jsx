import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TodoList from "./TodoList";

const Home = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-white text-4xl font-semibold mt-5">Todos</h1>
        <div className="flex items-center gap-2 mt-5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="py-2 px-4 rounded-md w-[20rem] outline-none"
            type="text"
            name=""
            id=""
          />
          <button
            className="font-medium text-xl border-2 text-white flex justify-center items-center w-[4rem] h-[2.4rem] rounded-md outline-none"
            onClick={() => {
              dispatch(addTodo(input));
              setInput("");
            }}
          >
            Add
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
