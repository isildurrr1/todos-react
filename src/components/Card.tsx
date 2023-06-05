import { useState } from "react";
import { CardProps } from "../types/types";
const Card = ({text}: CardProps) => {
  const[check, setCheck] = useState(false);
  const lol = () => {
    if (check) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }
  return (
    <div className="card">
      <label className="checkbox">
        <input onClick={lol} type="checkbox" className="checkbox__input"/>
        <div className="checkbox__checkmark"/>
      </label>
      <div className="card__delete-overlay">
        <span className={`card__text ${check ? 'strike' : ''}`}>{text}</span>
        <button className="card__delete" type="button"/>
      </div>
    </div>
  );
}

export default Card;