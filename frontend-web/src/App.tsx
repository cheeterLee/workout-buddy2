import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components'
import { Contact, Login, Personal, Home, Signup } from './pages'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = Boolean(useSelector((state: any) => state.token)) // if not authenticated, navigate to login
	console.log('isAuth', isAuth)

  return (
    <div className='w-[100%], h-[100%] bg-primary-200 dark:bg-primary-900'>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/login' />}/>
      </Routes>
    </div>
  )
}

export default App
