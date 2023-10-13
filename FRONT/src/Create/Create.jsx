import './Create.css'
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';

function Create(){
    const [card, setCard] = useState();
    let title = '';
    let subtitle = '';
    let text = '';
    let tag = '';
    function createPost() {
        title = document.querySelector("#title").value;
        subtitle = document.querySelector("#subtitle").value;
        text = document.querySelector("#text").value;
        tag = document.querySelector('input[name="tag"]:checked').value;
        console.log(tag);

        fetch('http://test1/index6.php?title='+title+'&subtitle='+subtitle+'&text='+text+'&tag='+tag,{
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
    if(card==='success'){
        window.location.replace("http://localhost:3000/");
    };

    return(
        <>
            {/* Создание статьи  */}
        <div className='main_cr'>
            <Form.Control  type="text" id='title' placeholder="Normal text" className='Zagolovok' />

            <Form.Control  type="text" id='subtitle' placeholder="Normal text" className='underZag' />

            <Form.Control  as="textarea" id='text' rows={5} className='textZag' />

            <div>
                <input type="radio" id="tagChoice1" name="tag" value="Что говорят дотеры" />
                <label for="tagChoice1">Что говорят дотеры</label>

                <input type="radio" id="tagChoice2" name="tag" value="Прошедшие матчи" />
                <label for="tagChoice2">Прошедшие матчи</label>

                <input type="radio" id="tagChoice3" name="tag" value="Мемы" />
                <label for="tagChoice3">Мемы</label>

                <input type="radio" id="tagChoice4" name="tag" value="Новости" />
                <label for="tagChoice1">Новости</label>
            </div>
                
            <div className='submitZag'>
                <div type='button'>
                    <img src="./img/add.png" style={{ marginRight: '10px'}}  width={30} height={25}/>
                </div>
                {card}
                <div className='main_kar' type='button' onClick={createPost}>
                    <li style={{listStyle: 'none', color: 'white'}}>отправить</li>
                    <div>
                        <img src="./img/send_white.png" width={30} height={25} className='kartingka_sub' />
                    </div>
                </div >
            </div>
    
        </div>


        


        </>
    )
}
export default Create;