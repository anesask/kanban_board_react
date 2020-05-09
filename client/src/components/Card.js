import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Card = ({ cardID, text }) => {
  const { deleteCard } = useContext(GlobalContext);
  return (
    <li className="list-item">
      {text}
      <button
        className="delete is-pulled-right btn-hover"
        onClick={() => deleteCard(cardID)}
      />
    </li>
  );
};
