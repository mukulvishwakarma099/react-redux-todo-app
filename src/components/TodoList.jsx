import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div className="renderTodos mt-8 text-white flex items-center flex-col gap-5">
      {todos?.map((i) => (
        <div className="flex items-center gap-3" key={i.id}>
          <p>{i.content}</p>
          <button
            className="text-white border-2 border-gray-600 rounded-md capitalize px-3 py-2"
            onClick={() => dispatch(deleteTodo(i.id))}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
