import React, {useState} from "react"
import UserCard from "./UserCard"
import ToolBar from "./ToolBar"

import data from '../data'


export default function Main() {
  
  const [userCards, setUserCards] = useState(data)
  const [index, setIndex] = useState(0)
  
  const previousCard = () => {
    setIndex(prev => {
    if(prev <= 0) return 0
    return prev - 1
  })
}

const nextCard = () => {
  setIndex(prev => {
    if(prev >= data.length - 1) return data.length - 1
    return prev + 1
})
}


  return (
    <main>
      <UserCard 
      userCards={userCards} 
      index={index} 
      />
      <ToolBar 
      fn={{previousCard, nextCard}} 
      setUserCards={setUserCards} 
      index={index}
      />
    </main>
  )
}