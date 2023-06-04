import Header from "./Header";
import Main from "./Main";
import { CardProps } from "../types/types";

const App: React.FC = () => {
  
  const cards: CardProps[] = [
    {text: "LOOOOL"},
    {text: "prikol"}
  ]

  return (
    <div className="todo">
      <div className="todo__container">
        <Header/>
        <Main data={cards}/>
      </div>
    </div>
  )
}

export default App
