import { useState } from "react";
import { CardProps } from "../types/types";
const Card = ({card, text, handleCardDelete}: CardProps) => {
  const[check, setCheck] = useState<boolean | null>(null);
  const checkHandler = () => {check ? setCheck(false) : setCheck(true);}
  const deleteCard = () => {
    handleCardDelete(card);
  }
  return (
    <div className="card">
      <label className="checkbox">
        <input onClick={checkHandler} type="checkbox" className="checkbox__input"/>
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