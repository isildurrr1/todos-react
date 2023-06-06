import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
import {useState} from 'react'
import { CardProps } from "../types/types";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const cards: CardProps[] = [
    // {text: "LOOOOL"},
    // {text: "prikol"},
    // {text: "prikol"},
    // {text: "prikol"}
  ]
  const openPopup = () => {isOpen ? setIsOpen(false) : setIsOpen(true)}
  return (
    <div className="todo">
      <div className="todo__container">
        <Header/>
        <Main data={cards}/>
        <button onClick={openPopup} type="button" className="add">
          <span className="span add__first-span"></span>
          <span className="span add__second-span"></span>
        </button>
        <Popup isOpen={isOpen}/>
      </div>
    </div>
  )
}

export default App
