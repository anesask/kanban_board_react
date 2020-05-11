import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = React.memo(({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          className="list-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </li>
      )}
    </Draggable>
  );
});

export default Task;
