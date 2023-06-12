import React from "react"

export interface Card {
  text: string,
  id: number,
  checked: boolean | null
}

export interface CardProps {
  card: Card,
  text: string,
  handleCardDelete: Function
  hadleCardCheck: Function
}

export interface MainProps {
  data: Card[],
  onCardDelete: Function
  onCardCheck: Function
}

export interface PopupProps {
  isOpen: boolean | null,
  onSubmit: Function
}

export interface AddButtonProps {
  dataArray: Card[], 
  onClick: React.MouseEventHandler, 
  popupStatus: boolean | null
}
