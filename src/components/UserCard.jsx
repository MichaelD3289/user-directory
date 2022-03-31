import React from "react"

export default function UserCard({userCards, index}) {

  const {city,  country, employer, favoriteMovies, id, name: {first, last}, title} = userCards[index]

  const bold = {
    letterSpacing: '.1rem',
    fontSize: "1.1rem",
    marginRight: ".5rem"
  }

  const normal = {
    fontSize: "1.1rem",
    letterSpacing: ".15rem",
    marginBottom: ".5rem"
  }
  
  return (
    <article style={{
      width: "100%",
      height: "auto",
      backgroundColor: "#ebebeb",
      borderRadius: ".25rem",
      padding: "4rem 5rem",
      position: "relative"
    }}>
      <h1 style={{
        fontSize: "2rem",
        borderBottom: "2.5px solid #34a5da",
        width: "fit-content",
        marginBottom: "1.25rem"
      }}>
        {first} {last}</h1>
      <p style={normal}>
        <strong style={bold}>
          From:</strong>
           {city}, {country}
           </p>
      <p style={normal}>
        <strong style={bold}>
          Job Title:
          </strong>
          {title}</p>
      <p style={{...normal, marginBottom: "2.5rem"}}>
        <strong style={bold}>
          Employer:
          </strong>
          {employer}</p>

      <h4 style={{fontSize: "1.3rem"}}>Favorite Movies:</h4>
      <ol style={{
        fontSize: "1.25rem",
        padding: ".5rem 3rem"
      }}>
        <li>{favoriteMovies[0]}</li>
        <li>{favoriteMovies[1]}</li>
        <li>{favoriteMovies[2]}</li>
      </ol>
      <h4 style={{
        position: "absolute",
        top: ".5rem",
        right: "1rem",
        fontSize: "2rem"
      }}>
        {index + 1}/{userCards.length}
        </h4>
    </article>
  )
}