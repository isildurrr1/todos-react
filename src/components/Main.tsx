import Card from "./Card";
import { MainProps } from "../types/types";

const Main = ({data, onCardDelete}: MainProps) => {
  return(
    <main className="main">
      {!data.length && <div className="todo__empty">No Tasks</div> }
      {data.map((card) => (
        <Card key={card.id} card={card} text={card.text} handleCardDelete={onCardDelete}/>
      ))}
    </main>
  );
}
export default Main;