import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
      </div>
    </>
  )
}

export default App
