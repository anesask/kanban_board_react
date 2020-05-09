export default (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        cards: [],
        title: action.payload
      };

    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };

    default:
      return state;
  }
};
