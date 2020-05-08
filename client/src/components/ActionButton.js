import React from "react";
import { mdiPlus } from "@mdi/js";
export const ActionButton = () => {
  return (
    <button className="button is-primary">
      <span className="icon">
        <mdiPlus />
      </span>
      Add Card
    </button>
  );
};
