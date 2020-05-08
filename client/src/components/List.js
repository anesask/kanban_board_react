import React from "react";
import { ActionButton } from "./ActionButton";
export const List = () => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4">John Smith</p>
        <ul className="list is-hoverable">
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            repudiandae.
          </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            repudiandae.
          </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            repudiandae.
          </li>
        </ul>
        <ActionButton />
      </div>
    </div>
  );
};
