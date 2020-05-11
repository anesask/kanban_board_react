import React, { useContext, useRef } from "react";
import DrgDrpContext from "../provider/DragDropProvider";

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    endEditing(columnId);
    if(newTask.value === ''){
      alert('Task cannot be empty!')
    } else {
      addData(columnId, newTask.value);
    }
    
  };

  return (
    <form className="card-content has-background-white-ter">
      <input
        // name="fname"
        autoFocus
        className="input"
        type="text"
        placeholder="Enter your task here..."
        ref={(val) => (newTask = val)}
        defaultValue=""
        minLength="2"
        maxLength="60"
      />
      <button
        type="button"
        className="button is-primary swing-in-bottom-bck"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
