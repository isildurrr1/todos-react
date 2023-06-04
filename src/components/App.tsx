
const App: React.FC = () => {
  const date: Date  = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNow: string = months[date.getMonth()];
  const dayNow: string = days[date.getDay()];
  const todaysDate: number = date.getDate();
  return (
    <div className="todo">
      <div className="todo__container">
        <header className="header">
          {monthNow} {dayNow} {todaysDate}
        </header>
        <main className="main">
          <div className="card">
            <label className="checkbox">
              <input type="checkbox" className="checkbox__input"/>
              <div className="checkbox__checkmark"></div>
            </label>
            <div className="card__delete-overlay">
              <span className="card__text">Pack lunches</span>
              <button className="card__delete" type="button"></button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
