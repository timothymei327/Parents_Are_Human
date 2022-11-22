import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import Cards from './components/Cards'
import UsedCards from './components/UsedCards'
import Instructions from './components/Instructions'
import { Route, Routes } from 'react-router'

function App() {
  const [picked, setPicked] = useState('')
  const [used, setUsed] = useState([])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                used={used}
                setUsed={setUsed}
                picked={picked}
                setPicked={setPicked}
              />
            }
          />
          <Route
            path="/used-cards"
            element={<UsedCards used={used} setUsed={setUsed} />}
          />
          <Route path="/Instructions" element={<Instructions />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
