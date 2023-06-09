export interface Card {
  text: string
  id: number
}

export interface CardProps {
  card: Card,
  text: string,
  handleCardDelete: Function
}

export interface MainProps {
  data: Card[],
  onCardDelete: Function
}

export interface PopupProps {
  isOpen: boolean | null,
  onSubmit: Function
}