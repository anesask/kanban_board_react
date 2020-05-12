import React, { useContext } from "react";
import Form from "./Form";
import { IoIosAddCircle } from "react-icons/io";
import DrgDrpContext from "../provider/DragDropProvider";

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
      <div className="has-text-right">
        <IoIosAddCircle
          onClick={() => handleEditing(columnId)}
          style={{ fontSize: "30px", marginRight: "10px" }}
        />
      </div>
    );
  }
};

export default AddTask;
