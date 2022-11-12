import "./App.css"
import ChosenFilmDetails from "./components/Cfd"
import TableOfContent from "./components/Toc"

function App() {
  return (
    <div className="App">
      {/* TOC */}
      <div className="app_container">
        <TableOfContent />
        {/* Chosen Film Details */}
        <ChosenFilmDetails />
      </div>
    </div>
  )
}

export default App
