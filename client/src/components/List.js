import React from "react";
import { Card } from "./Card";
import { ActionButton } from "./ActionButton";
export const List = ({ title, cards }) => {
  console.log();
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <p className="title is-4">{title}</p>
          <ul className="list is-hoverable">
            {cards.map((card) => (
              <Card cardID={card.id} key={card.id} text={card.text} />
            ))}
          </ul>
        </div>
        <ActionButton/>
      </div>
    </div>
  );
};
