import { CardProps } from "../types/types";
const Card = ({text}: CardProps) => {
  return (
    <div className="card">
      <label className="checkbox">
        <input type="checkbox" className="checkbox__input"/>
        <div className="checkbox__checkmark"/>
      </label>
      <div className="card__delete-overlay">
        <span className="card__text">{text}</span>
        <button className="card__delete" type="button"/>
      </div>
    </div>
  );
}

export default Card;