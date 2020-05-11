const initialData = {
    tasks: {
      "task-1": { id: "task-1", content: "plan & design" },
      "task-2": { id: "task-2", content: "code, test & deploy" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "Plans",
        tasksOrder: ["task-1", "task-2"],
        isEditing: false,
      },
      "column-2": {
        id: "column-2",
        title: "Doing",
        tasksOrder: [],
        isEditing: false,
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        tasksOrder: [],
        isEditing: false,
      },
    },
    columnsOrder: ["column-1", "column-2", "column-3"],
  };
  
  export default initialData;
  