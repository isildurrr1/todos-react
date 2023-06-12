import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
import { useState, useEffect } from 'react'
import { Card } from 'src/types/types';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null); // state for add popup
  const initialCards = JSON.parse(localStorage.getItem('cards') || '[]'); // getting data from local storage
  const [cards, setCards] = useState<Card[]>(initialCards) // state for an array of cards with tasks

  // update data in local storage when array of cards changes
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  // function to add a new card
  const addNewCard = (text: string) => {
    if (text !== '') {
      cards.length === 0 ? setCards([{ id: 0, text: text, checked: null }])
        : setCards([{ id: cards[cards.length - 1].id + 1, text: text, checked: null }, ...cards])
    }
    setIsOpen(false);
  }

  // task execution marker function
  const checkCard = (card: Card) => {
    setCards(cards.map((c) => c.id === card.id ? card : c))
  }

  // task card removal function
  const handleCardDelete = (card: Card) => {
    setCards(cards.filter(e => e !== card));
  }

  // popup opening function
  const openPopup = () => { isOpen ? setIsOpen(false) : setIsOpen(true) }

  return (
    <div className="todo">
      <div className="todo__container">
        <Header />
        <Main data={cards} onCardDelete={handleCardDelete} onCardCheck={checkCard} />
        <button disabled={cards.length > 10} onClick={openPopup} type="button" className={`add ${isOpen ? 'add-active' : isOpen === null ? '' : 'add-inactive'}`}>
          <span className="span add__first-span"></span>
          <span className="span add__second-span"></span>
        </button>
        <Popup isOpen={isOpen} onSubmit={addNewCard} />
      </div>
    </div>
  )
}

export default App
