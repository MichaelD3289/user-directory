import React from "react"

export default function Header() {
  return (
    <header style={{
      height: "6rem",
      backgroundColor: "#34a5da",
      margin: "0",
      color: "white",
      padding: "1.75rem 4rem"
    }}>
    
      <h2 style={{
        letterSpacing: ".1rem",
        fontSize: "1.75rem",
        cursor: "pointer"
      }}>Home</h2>
    </header>
  )
}