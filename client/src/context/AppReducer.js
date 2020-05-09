export default (state, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      return {
        ...state,
        lists: state.lists.filter(lists => lists.id !== action.payload),
      };
    default:
      return state;
  }
};
