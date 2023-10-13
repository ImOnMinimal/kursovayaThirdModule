import '../Create/Create.css'
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';

function CreateNews(){
    const [card, setCard] = useState();
    let text = '';
    function createNews() {
        text = document.querySelector("#text").value;

        fetch('http://test1/createNews.php?text='+text,{
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
            <Form.Control  as="textarea" id='text' rows={5} className='textZag' />
                
            <div className='submitZag'>
                <div type='button'>
                    <img src="./img/add.png" style={{ marginRight: '10px'}}  width={30} height={25}/>
                </div>
                {card}
                <div className='main_kar' type='button' onClick={createNews}>
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
export default CreateNews;