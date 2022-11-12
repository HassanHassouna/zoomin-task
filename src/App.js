import React, { useState } from "react"
import "./App.css"
import ChosenFilmDetails from "./components/Cfd"
import TableOfContent from "./components/Toc"

function App() {
  const [chosenFilm, setChosenFilm] = useState(" No Film Chosen")
  console.log("chosenFilm", chosenFilm)
  return (
    <div className="App">
      {/* TOC */}
      <div className="app_container">
        <TableOfContent chosenFilm={chosenFilm} setChosenFilm={setChosenFilm} />
        {/* Chosen Film Details */}
        <ChosenFilmDetails chosenFilm={chosenFilm} />
      </div>
    </div>
  )
}

export default App
