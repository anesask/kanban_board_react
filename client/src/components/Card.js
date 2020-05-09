import React from "react";
// import { GlobalContext } from "../context/GlobalState";

export const Card = ({ id, text }) => {
  // const { deleteCard } = useContext(GlobalContext);
  return (
    <li className="list-item">
      {text}
      {/* <button
        className="delete is-pulled-right btn-hover"
        onClick={() => deleteCard(id)}
      /> */}
    </li>
  );
};
