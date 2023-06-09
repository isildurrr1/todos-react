import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
import { useState, useEffect } from 'react'
import { Card } from "../types/types";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const initialCards = JSON.parse(localStorage.getItem('cards') || '{}');
  const [cards, setCards] = useState<Card[]>(initialCards)

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  const addNewCard = (text: string) => {
    setCards([...cards, {id: cards.length, text: text, checked: null}])
    setIsOpen(false);
  }

  const checkCard = (card: Card) => {
    setCards(cards.map((c) => c.id === card.id ? card : c))
    console.log(cards)
  }

  const handleCardDelete = (card: Card) => {
    setCards(cards.filter(e => e !== card));
  }
  const openPopup = () => { isOpen ? setIsOpen(false) : setIsOpen(true) }

  return (
    <div className="todo">
      <div className="todo__container">
        <Header />
        <Main data={cards} onCardDelete={handleCardDelete} onCardCheck={checkCard}/>
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
