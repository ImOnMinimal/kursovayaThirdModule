import "./Reg.css"
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


function Reg(){
    const [card, setCard] = useState();
    let login = '';
    let email = '';
    let password = '';
    let confirm = '';
    function register() {
        login = document.querySelector("#login").value;
        email = document.querySelector("#email").value;
        password = document.querySelector("#password").value;
        confirm = document.querySelector("#confirm").value;

        fetch('http://test1/index1.php?login='+login+'&email='+email+'&password='+password+'&confirm='+confirm,{
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
<div className='form' action='' method='GET' style={{textAlign: 'center'}}>
    <h2 style={{textAlign: "center"}}>Регистрация</h2>
  
  <input className='form__input' type='text' id='login' placeholder='Ваше имя' pattern=".{2,}" required></input>
  <input className='form__input' type='email' id='email' placeholder='Ваш email' required></input>
  <input className='form__input' type='password' id='password' placeholder='Пароль (минимум 7 символов)' pattern=".{7,}" required></input>
  <input className='form__input' type='password' id='confirm' placeholder='Повторите пароль (минимум 7 символов)' pattern=".{7,}" required></input>

  {card}
  <button onClick={register} className='form__submit' type='submit'>Зарегистрироваться</button>
  
 </div>
)
}
export default Reg;