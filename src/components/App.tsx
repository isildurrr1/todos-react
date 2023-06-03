
const App: React.FC = () => {
  const date: Date  = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNow: string = months[date.getMonth()];
  const dayNow: string = days[date.getDay()];
  const todaysDate: number = date.getDate();
  return (
    <div className="todo">
      <div className="todo__container">{monthNow} {dayNow} {todaysDate}</div>
    </div>
  )
}

export default App
