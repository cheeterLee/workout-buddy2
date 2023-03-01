import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components'
import { Login, Personal, Portfolio } from './pages'

function App() {
  return (
    <div className='w-[100%], h-[100%] bg-primary-200 dark:bg-primary-900'>
      <Navbar />
      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path='/home' element={<Portfolio />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='*' element={<Navigate to='/auth' />}/>
      </Routes>
    </div>
  )
}

export default App
