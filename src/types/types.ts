import React from "react"

export interface Card {
  text: string,
  id: number,
  checked: boolean | null
}

export interface CardProps {
  card: Card,
  text: string,
  handleCardDelete: (card: Card) => void,
  hadleCardCheck: (card: Card) => void,
}

export interface MainProps {
  data: Card[],
  onCardDelete: (card: Card) => void,
  onCardCheck: (card: Card) => void,
}

export interface PopupProps {
  isOpen: boolean | null,
  onSubmit: (text: string) => void,
}

export interface AddButtonProps {
  dataArray: Card[], 
  onClick: React.MouseEventHandler, 
  popupStatus: boolean | null
}
