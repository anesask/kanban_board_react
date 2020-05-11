import React, { useState } from "react";
import initialData from "../data/initialData";

// New Context
const DragDropContext = React.createContext();

const DragDropProvider = ({ children }) => {
  let [state, setState] = useState(initialData);

  const handleEditing = (columnId) => {
    const column = state.columns[columnId];
    column.isEditing = true;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [column.id]: {
          ...column,
        },
      },
    };
  };
  setState(newState);
};

const endEditing = (columnId) => {
  const column = state.columns[columnId];
  column.isEditing = false;

  const newState = {
    ...state,
    columns: {
      ...state.columns,
      [column.id]: {
        ...column,
      },
    },
  };
  setState(newState);
};
