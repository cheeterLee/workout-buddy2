import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Personal, Portfolio } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/workouts' element={<Portfolio />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
    </>
  )
}

export default App
