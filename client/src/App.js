import React from "react";
import { List } from "./components/List";

function App() {
  return (
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <List />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
