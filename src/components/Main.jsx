import React, {useState} from "react"
import UserCard from "./UserCard"
import ToolBar from "./ToolBar"

import data from '../data'


export default function Main() {
  
  const [userCards, setUserCards] = useState(data)
  const [index, setIndex] = useState(0)
  const [newUserClicked, setNewUserClicked] = useState(false);
  
  const previousCard = () => {
    setIndex(prev => {
    if(prev <= 0) return 0
    return prev - 1
  })
}

const nextCard = () => {

  setIndex(prev => {
    if(prev >= userCards.length - 1) return userCards.length - 1
    return prev + 1
})
}

const clickNew = () => {
  setNewUserClicked(true)
}

const submitNewUser = (e, user) => {
  e.preventDefault();
  
  let newId = userCards[userCards.length - 1].id;
  newId++

  setNewUserClicked(false)
  const newUser = {
    ...user,
    id: newId
  }
 
  setUserCards(prev => ([
    ...prev,
    {...newUser}
  ]))

  
}

  return (
    <main>
      <UserCard 
      userCards={userCards} 
      index={index}
      newUserClicked={newUserClicked}
      submitNewUser={submitNewUser} 
      />
      <ToolBar 
      fn={{previousCard, nextCard}} 
      setUserCards={setUserCards} 
      index={index}
      clickNew={clickNew}
      />
    </main>
  )
}