import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {


  return <div className='mainHeader' id='1'>

    <Stack direction="horizontal" gap={3}>
      <div className='leftHeader'>
      <Link className='link' to="/">   <img className='logo' src="/img/logo.png" width={50} height={50} style={{marginTop: '3%'}}/></Link>  
        <div className='leftHeaderText'> 
          <h1 style={{color: 'white', marginLeft: '1%', verticalAlign: 'middle', }}><Link style={{color: 'white',textDecoration: 'none'}} className='link' to="/">DOTANEWS</Link></h1>
        </div>
      </div>


      <div className='new-rand '>
          <li className='text_head' style={{color: 'white', paddingRight: '5%', marginRight: '5%',  borderRight: '1px solid white'}}><Link style={{color: 'white',     textDecoration: 'none'}} className='link' to="/">Новости</Link></li>
          
          <Link className='link' to="/Random"><li className='text_head' style={{color: 'white'}}>Случайные предметы</li></Link>
      </div>
      
      <div className='rightHeader'>
        <li style={{color: 'white', paddingRight: '5%', marginRight: '5%',  borderRight: '1px solid white', verticalAlign: 'middle'}}><Link style={{color: 'white',     textDecoration: 'none'}} className='link' to="/Reg">Зарегистрироваться</Link></li>

      <li style={{color: 'white', verticalAlign: 'middle'}}><Link style={{color: 'white', textDecoration: 'none'}} className='link' to="/Login">Войти</Link></li>
      </div>
    </Stack>
  </div>

}

export default Header;




