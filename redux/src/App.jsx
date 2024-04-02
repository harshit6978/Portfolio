
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import './index.css'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Resume from './Component/Resume'
import Contact from './Component/Contact'
import Work from './Component/Work'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
