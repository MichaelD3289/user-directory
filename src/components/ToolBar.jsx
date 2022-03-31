import React from "react"

export default function ToolBar({fn: {previousCard, nextCard}, setUserCards, index}) {

const deleteCard = () => {
  setUserCards(prev => (
    prev.filter((user, userIndex) => userIndex !== index)
  ))
}

  return (
    <section className="toolBar">
      <h3 onClick={previousCard}>{`< Previous`}</h3>
      <button className="leftBtn">Edit</button>
      <button onClick={deleteCard} className="middleBtn">Delete</button>
      <button className="rightBtn">New</button>
      <h3 onClick={nextCard}>{`Next >`}</h3>
    </section>
  )
}