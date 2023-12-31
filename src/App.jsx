import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Works from './pages/Works'

function App() {
  
  return (
    <main className='bg-primary h-full'>
      <section className='grid justify-center pt-4 md:px-2'>
      <div className='bg-white w-[270px] sm:w-[400px] sm:rounded-t-full md:w-[900px] md:rounded-t-full rounded-t-full'>
        <nav className='flex justify-between md:justify-end md:gap-6 md:pr-10 p-3 border-r-8 border-secondary rounded-tr-full font-semibold'>
          <Link to="/">Inicio</Link>
          <Link to="/blog">Curriculum</Link>
          <Link to="/works">Trabajos</Link>
        </nav>
      </div>
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/works' element={<Works />}/>
      </Routes>
    </main>
  )
}

export default App
