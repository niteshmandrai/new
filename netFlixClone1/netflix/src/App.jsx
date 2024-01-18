import './App.css'
import Header from './comps/header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './home/Home'
import Banner from './comps/banner/Banner'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Home/>
    </>
   
  )
}

export default App
