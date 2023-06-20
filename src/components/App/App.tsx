import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
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
      setCards([...cards, 
        { 
          id: Math.random().toString(16).slice(5),
          text: text, 
          checked: null 
        }])
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
        <AddButton dataArray={cards} onClick={openPopup} popupStatus={isOpen} />
        <Popup isOpen={isOpen} onSubmit={addNewCard} />
      </div>
    </div>
  )
}

export default App
