import './Random.css'
import React, {useState} from 'react';
import DotaItem from './DotaItem.jsx'

function Random(){
    const [card, setCard] = useState([{id: 1, src: './img/question.png'},{id: 2, src: './img/question.png'},{id: 3, src: './img/question.png'},{id: 4, src: './img/question.png'},{id: 5, src: './img/question.png'}])
    const [card1, setCard1] = useState([{id: 1, src: './img/question.png'}])
    const [card2, setCard2] = useState([{id: 1, src: './img/question.png'}])
    
    function handleRndimg() {
        fetch('http://test1/index3.php',{
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

        fetch('http://test1/index2.php',{
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
        setCard1(response);
        })

        fetch('http://test1/index4.php',{
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
        setCard2(response);
        })
    }
    
    return(
        <div className='main_create'>
            <div className='create_pers' type="button">
                <li style={{listStyle: 'none', height: '33px'}} onClick={handleRndimg}>Сгенирировать случайную сборку</li>
            </div>
            
            <div className='main_random '>
                <div className='d-flex item justify-content-center mb-5'> {/*случайный герой*/}
                    {card1.map((singleCard1) => (
                    <DotaItem id={singleCard1.id} src={singleCard1.src}/>
                    ))}
                </div>
                <div className='main_items'>
                    <div className='d-flex item justify-content-center mb-5'>
                        {/*случайный ботинок*/}
                        {card2.map((singleCard2) => ( 
                        <DotaItem id={singleCard2.id} src={singleCard2.src}/>
                        ))}
                        {/*5 случайных шмоток кроме ботинка*/}
                        {card.map((singleCard) => ( 
                        <DotaItem id={singleCard.id} src={singleCard.src}/>
                        ))}
                    </div>

                    {/* <div  className='item'>
                        <li>Boots of Travel 2</li>
                        <img src="./img/like.png" width={50} height={50 }/>
                    </div> */}
                </div>
            </div>
            <div className='h-100'></div>
        
        
        </div>
    )
}
export default Random;