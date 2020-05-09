import React, { useContext } from "react";
import { List } from "./components/List";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

function App() {
  const { lists } = useContext(GlobalContext);
  // console.log(lists);
  return (
    <GlobalProvider>
      <section className="section is-mobile">
        <div className="container">
          <div className="columns is-multiline">
            {lists.map((list) => (
              <List key={list.id} title={list.title} cards={list.cards} />
            ))}
          </div>
        </div>
      </section>
    </GlobalProvider>
  );
}

export default App;
