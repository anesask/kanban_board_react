import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddList = () => {
  const [text, setText] = useState("");
  const { addList } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 10000000),
      title: text,
    };
    addList(newList);
    console.log(newList);
  };
  return (
    <form onSubmit={onSubmit} className="control">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add List"
      />
      <button className="button is-primary">Add List</button>
    </form>
  );
};
