import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Full from './Full/Full'
import Reg from './Reg/Reg'
import Login from './Login/Login'
import Create from './Create/Create'
import Random from './Random/Random'
import Particle from './Particle/Particle'
import { Route, Routes } from 'react-router-dom';
function App() {
  




  return(
  <>
  
  
  <Header/>
  <Routes>
        <Route path='/' element={ <Main /> }></Route>
        <Route path='/Full/:id' element={ <Full /> }></Route> 
        <Route path='/Reg' element={ <Reg /> }></Route>
        <Route path='/Login' element={ <Login /> }></Route>
        <Route path='/Create' element={ <Create /> }></Route>
        <Route path='/Random' element={ <Random /> }></Route>
  </Routes>
  <Footer/>

  <Particle/>







  </>
  )
}

export default App;
