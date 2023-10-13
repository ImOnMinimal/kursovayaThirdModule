import './Login.css'
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

function Login(){
    const [card, setCard] = useState();
    let login = '';
    let password = '';
    function loginReg() {
        login = document.querySelector("#login").value;
        password = document.querySelector("#password").value;

        fetch('http://test1/index5.php?login='+login+'&password='+password,{
        method : 'POST',
        header : {
            "Content-Type" : "applicationn/x-www-form-urlencoded"
        },
        body  : JSON.stringify({action : 1})
        })
        .then (response => response.json())
        .then (response =>{
        // console.log(response);
        
        // setT1(response);
            setCard(response);
            
        })
    }
    if(card==='logged'){
        window.location.replace("http://localhost:3000/");
        localStorage.setItem('login', login);
        console.log(localStorage.getItem('login'));
    };
    

    return(
        
    <form className='form' action='' method='GET' style={{textAlign: 'center'}}>
    <h2 style={{textAlign: "center"}}>Вход</h2>
  
    <input className='form__input' type='login' id='login' placeholder='Ваш логин' required></input>
    <input className='form__input' type='password' id='password' placeholder='Пароль (минимум 7 символов)' pattern=".{7,}" required></input>

    {card}
    <button onClick={loginReg} className='form__submit' type='submit'>Войти</button>
    <Link to="/"><input className='form__submit' type='submit' value='Войти'></input></Link>
  
 </form>
    )
}
export default Login;