import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import Nav from './components/Nav'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />

    </div>
  )
}

export default App
