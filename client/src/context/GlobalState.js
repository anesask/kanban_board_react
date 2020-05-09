import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial sate
const initialState = {
  lists: [
    {
      id: 0,
      title: "Card One",
      cards: [
        { id: 0, text: "Card 1" },
        { id: 1, text: "Card 2" },
        { id: 2, text: "Card 3" },
      ],
    },
    {
      id: 1,
      title: "Card Two",
      cards: [
        { id: 0, text: "Card 2/1" },
        { id: 1, text: "Card 2/2" },
        { id: 2, text: "Card 2/3" },
      ],
    },
    {
      id: 3,
      title: "Card Three",
      cards: [
        { id: 0, text: "Card 3/1" },
        { id: 1, text: "Card 3/2" },
        { id: 2, text: "Card 3/3" },
      ],
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteCard(id){
    console.log('Delete fired!');
    dispatch({
      type: 'DELETE_CARD',
      payload: id
    })
  }


  return (
    <GlobalContext.Provider value={{ lists: state.lists, deleteCard }}>
      {children}
    </GlobalContext.Provider>
  );
};
