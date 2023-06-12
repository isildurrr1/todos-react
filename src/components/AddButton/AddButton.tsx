import { AddButtonProps } from "src/types/types";

const AddButton = ({ dataArray, onClick, popupStatus }: AddButtonProps) => {
  return (
    <button
      disabled={dataArray.length > 10}
      onClick={onClick}
      type="button"
      className={`add ${popupStatus ? 'add_active' : popupStatus === null ? '' : 'add_inactive'}`}>
      <span className="add__span add__first-span"></span>
      <span className="add__span add__second-span"></span>
    </button>
  );
}

export default AddButton;