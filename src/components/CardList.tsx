import React from "react";

import { Card as CardModel } from "../models/Card";
import Card from "./Card";


// Definim el conjunt de props que pot esperar el nostre component
interface CardListProps {
    cardsList: CardModel[];  // En aquest cas només tenim una llista de cards
  }
  
  // Indiquem que espera com a props el cardsList de CardListProps
  function CardList({ cardsList }: CardListProps) {
    return (
      <>
        {cardsList.map(card => (
          <Card card={card} />
        ))}
      </>
    );
  }

export default CardList;