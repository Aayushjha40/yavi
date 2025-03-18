
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div>
    <main >
    <Outlet/>
    </main>
    <Footer />
    </div>
    </>
  )
}

export default App
