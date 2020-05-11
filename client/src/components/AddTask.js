import React, { useContext } from "react";
import Form from "./Form";
import DrgDrpContext from "../provider/DragDropProvider";

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
     
        <div className="has-text-centered ">
        <button onClick={() => handleEditing(columnId)} className="button is-primary" autoFocus>
        + Add Task
      </button>
        </div>
    
    );
  }
};

export default AddTask;
