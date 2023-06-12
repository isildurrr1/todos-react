import Card from "./Card";
import { MainProps } from "src/types/types";

const Main = ({ data, onCardDelete, onCardCheck }: MainProps) => {
  return (
    <main className="main">
      {
        !data.length ? <div className="todo__empty">No Tasks</div>
          : data.map(card => (
            <Card key={card.id} card={card} text={card.text} handleCardDelete={onCardDelete} hadleCardCheck={onCardCheck} />
          ))
      }
    </main>
  );
}
export default Main;