import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Login, Personal, Portfolio } from './pages'

function App() {
  return (
    <div className='w-[100%], h-[100%] bg-primary-200 dark:bg-primary-900'>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/workouts' element={<Portfolio />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
    </div>
  )
}

export default App
