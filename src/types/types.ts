export interface CardProps {
  text: string
}

export interface MainProps {
  data: CardProps[]
}

export interface PopupProps {
  isOpen: boolean | null
}