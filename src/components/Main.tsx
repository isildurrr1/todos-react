import Card from "./Card";
import { MainProps } from "../types/types";

const Main = ({data}: MainProps) => {
  return(
    <main className="main">
      {data.map((card) => (
        <Card text={card.text}/>
      ))}
    </main>
  );
}
export default Main;