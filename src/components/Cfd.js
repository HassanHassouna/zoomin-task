import React from "react"
import "./Cfd.css"

function ChosenFilmDetails({ chosenFilm }) {
  return (
    <div className="cfd_container">
      {chosenFilm.title ? (
        <div className="cfd_film_details">
          <h1>{chosenFilm.title}</h1>
          <p>{chosenFilm.opening_crawl}</p>
        </div>
      ) : (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {chosenFilm}
        </h1>
      )}
    </div>
  )
}

export default ChosenFilmDetails
