import { useState } from 'react'

import './App.css'
import CardList from './components/CardList'
import { Card } from './models/Card'

function App() {

  //Definim una llista de Cards
  var cardList:Card[] = [];
  cardList.push(new Card("1", "Título 1", "Descripción 1"));
  cardList.push(new Card("2", "Título 2", "Descripción 2"));

  return (

    //A la card List (Component) li passem el conjunt de Cards(Models) definits
    <CardList cardsList={cardList} />

  )
}

export default App
