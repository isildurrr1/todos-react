import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
import { CardProps } from "../types/types";

const App: React.FC = () => {

  const cards: CardProps[] = [
    {text: "LOOOOL"},
    {text: "prikol"},
    {text: "prikol"},
    {text: "prikol"}
  ]

  return (
    <div className="todo">
      <div className="todo__container">
        <Header/>
        <Main data={cards}/>
        <button type="button" className="add">
          <span className="span add__first-span"></span>
          <span className="span add__second-span"></span>
        </button>
        <Popup/>
      </div>
    </div>
  )
}

export default App
