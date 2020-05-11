import React, { useContext } from "react";
import Form from "./Form";
import DrgDrpContext from "../provider/DragDropProvider";

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
      <button onClick={() => handleEditing(columnId)} className="">
        + Add Task
      </button>
    );
  }
};

export default AddTask;
