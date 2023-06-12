import { SyntheticEvent, useState } from "react";
import { PopupProps } from "src/types/types";
const Popup = ({ isOpen, onSubmit }: PopupProps) => {
  const [task, setTask] = useState<string>(''); // state storing the text of the task

  // getting a task from input
  const changeTask = (event: SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;
    setTask(target.value)
  }

  // adding a card with a new task
  const addNewCard = (event: SyntheticEvent): void => {
    event.preventDefault();
    setTask('');
    onSubmit(task);
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${isOpen ? 'show' : 'hide'}`}>
        <form action="popup__form" className="popup__form" onSubmit={addNewCard}>
          <h1 className="popup__title">Add Task</h1>
          <input type="text" value={task || ''} onChange={changeTask} name="task" id="task" className="popup__input" placeholder="Add a Task here" />
          <button type="submit" className="popup__submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
