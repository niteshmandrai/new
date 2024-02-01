import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Coins from './components/coins/Coins'
import Exchanges from './components/exchanges/Exchanges'
import CoinDetails from './components/coinDetails/CoinDetails'
import Footer from './components/footer/Footer'


function App() {
  return (

    
    <BrowserRouter>

      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/coins' element={<Coins/>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
            <Route path='/coin/:id' element={<CoinDetails/>}/>


          </Routes>
          

          <Footer/>




    </BrowserRouter>

  )
}

export default App