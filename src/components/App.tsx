import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
import { useState } from 'react'
import { Card } from "../types/types";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [cards, setCards] = useState<Card[]>([
    { 
      id: 0,
      text: "LOOOOL"
    },
    { 
      id: 1,
      text: "prikol"
    }
    // {text: "prikol"}
  ])
  const addNewCard = (text: string) => {
    setCards([...cards, {id: cards.length, text: text}])
    setIsOpen(false)
  }
  const handleCardDelete = (card: Card) => {
    setCards(cards.filter(e => e !== card));
  }
  const openPopup = () => { isOpen ? setIsOpen(false) : setIsOpen(true) }
  return (
    <div className="todo">
      <div className="todo__container">
        <Header />
        <Main data={cards} onCardDelete={handleCardDelete} />
        <button onClick={openPopup} type="button" className={`add ${isOpen ? 'add-active' : isOpen === null ? '' : 'add-inactive'}`}>
          <span className="span add__first-span"></span>
          <span className="span add__second-span"></span>
        </button>
        <Popup isOpen={isOpen} onSubmit={addNewCard}/>
      </div>
    </div>
  )
}

export default App
