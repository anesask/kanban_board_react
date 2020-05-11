import React, { useContext, useRef } from "react";
import DrgDrpContext from "../provider/DragDropProvider";

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    endEditing(columnId);
    addData(columnId, newTask.value);
  };

  return (
    <form>
      <input
        className="input"
        type="text"
        placeholder="Enter your task here..."
        ref={(val) => (newTask = val)}
        defaultValue=""
      />
      <button className="button is-primary" onClick={handleAddClick}>
        Add Task
      </button>
    </form>
  );
};

export default Form;
