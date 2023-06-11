import { useState } from "react";
import { CardProps } from "src/types/types";
const Card = ({card, text, handleCardDelete, hadleCardCheck}: CardProps) => {
  const[check, setCheck] = useState<boolean | null>(card.checked ? true : null);
  const checkHandler = () => {
    if (!check) {
      setCheck(true);
      card.checked = true;
      hadleCardCheck(card);
    } else {
      setCheck(false);
      card.checked = false;
      hadleCardCheck(card);
    }
  }
  const deleteCard = () => {
    handleCardDelete(card);
  }
  return (
    <div className="card">
      <label className="checkbox">
        <input onChange={checkHandler} checked={check === null ? false : check} type="checkbox" className="checkbox__input"/>
        <div className="checkbox__checkmark"/>
      </label>
      <div className="card__delete-overlay">
        <span className={` card__text ${check === null ? '' : check ? 'strike card__text-opacity' : 'unstrike'}`}>{text}</span>
        <button onClick={deleteCard} className="card__delete" type="button"/>
      </div>
    </div>
  );
}

export default Card;