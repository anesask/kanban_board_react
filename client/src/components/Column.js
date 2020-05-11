import React from "react";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";
import { Droppable } from "react-beautiful-dnd";

const Column = React.memo(({ tasks, column, isEditing }) => {
  return (
    <div className="">
      <h1>{column.title}</h1>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className=""
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <AllTasks tasks={tasks} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTask columnId={column.id} isEditing={isEditing} />
    </div>
  );
});

export default Column;
