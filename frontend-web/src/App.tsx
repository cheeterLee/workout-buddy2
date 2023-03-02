import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components'
import { Contact, Auth, Personal, Home } from './pages'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = Boolean(useSelector((state: any) => state.token)) // if not authenticated, navigate to login
	console.log('isAuth', isAuth)

  return (
    <div className='w-[100%], h-[100%] bg-primary-200 dark:bg-primary-900'>
      <Navbar />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/auth' />}/>
      </Routes>
    </div>
  )
}

export default App
