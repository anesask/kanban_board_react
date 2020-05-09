import React from "react";
import { Card } from "./Card";
import { AddList } from "./AddList";
// import { ActionButton } from "./ActionButton";
// import { GlobalContext } from "../context/GlobalState";

export const List = ({ title, cards }) => {
  // const { deleteCard } = useContext(GlobalContext);
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <p className="title is-4">{title}</p>
          <ul className="list is-hoverable">
            {cards.map((card) => (
              <Card id={card.id} key={card.id} text={card.text} />
            ))}
          </ul>
          <AddList/>
        </div>
        
        {/* <ActionButton /> */}
      </div>
    </div>
  );
};
