const Popup = () => {
  return(
    <div className="popup popup_opened">
      <div className="popup__container">
        <form action="popup__form" className="popup__form">
          <h1 className="popup__title">Add Task</h1>
          <input type="text" name="task" id="task" className="popup__input" placeholder="Add a Task here"/>
          <button type="submit" className="popup__submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;