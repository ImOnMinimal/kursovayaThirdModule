import "./Main.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MainPost from '../Main/MainPost.jsx'

function Main() {
    const [data, setData] = useState([]);
    const [dataNews, setDataNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingNews, setLoadingNews] = useState(false);
    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://test1/getposts_desc.php"
                )
            ).json();

            // set state when the data received
            await setData(data); // data.concat(data)
            await setLoading(true);
            await console.log(data)
        };

        dataFetch();
    }, []);

    useEffect(() => {

        const dataFetch = async () => {
            const dataNews = await (
                await fetch(
                    "http://test1/getNews.php"
                )
            ).json();

            // set state when the data received
            await setDataNews(dataNews);
            await setLoadingNews(true);
        };

        dataFetch();
    }, []);

    function order_desc() {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://test1/getposts_desc.php"
                )
            ).json();

            // set state when the data received
            await setData(data);
        };

        dataFetch();
        
    }

    function order_asc() {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://test1/getposts_asc.php"
                )
            ).json();

            // set state when the data received
            await setData(data);
        };

        dataFetch();
        
    }



    return (
    <div className="main_news">
        <div className="main_set2">

            {/* Тема новостоной ленты */}
            <div className="setting">
                <h5>Тема новостной ленты</h5>
                <input type="checkbox" className="custom-checkbox" id="" /> Что говорят дотеры<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Прошедшие матчи<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Мемы<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Новости<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Всё
            </div>
            {/* Фильтр по дате */}
            <div className="filter">
                <h5>Сортировка по дате</h5>
                
                <input type="radio" id="orderChoice1" name="order" onClick={order_desc} value="По возрастанию"/>
                <label for="orderChoice1">По возрастанию <img src="/img/filter-top.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/> <br/></label>

                <input type="radio" id="orderChoice2" name="order" onClick={order_asc} value="По убыванию"/>
                <label for="orderChoice1">По убыванию <img src="/img/filter-bottom.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/></label>
                {/* <input type="radio" name="radiobox" onClick={order_desc} id="" /> По возрастанию <img src="/img/filter-top.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/> <br/>
                <input type="radio" name="radiobox" onClick={order_asc} id="" checked /> По убыванию <img src="/img/filter-bottom.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/> */}
            </div>
            
            <div className="create">
               <li style={{height: '30px'}}> <Link className='link' to="/Create">Создать статью</Link></li>
            </div>

            <div className="edit">
                <li  className='edit_li' style={{height: '30px'}}>Изменить главные новости</li>
            </div>
        </div>
        <div className="main_post">
                {/* главные новости недели */}
            <div className="news_week">
                <h1>Главные новости недели</h1>
                <ul>
                    { loadingNews ? dataNews.map((elementNews) => (
                        <li>{elementNews.text}</li>  
                    )

                    // LOADER //


                    ) : 'Загрузка'}
                </ul>
            </div>

            {/* Пост */}
            { loading ? data.map((element) => (
                <MainPost id={element.id} title={element.title} subtitle={element.subtitle} text={element.text} date={element.date} likes={element.likes} dislikes={element.dislikes}/>)

                // LOADER //


            ) : <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
            <defs>
                <clipPath id="smiley-eyes">
                    <circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
                    <circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
                </clipPath>
                <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="#fff" />
                </linearGradient>
                <mask id="smiley-mask">
                    <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
                </mask>
            </defs>
            <g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
                <g>
                    <rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
                    <g fill="none" stroke="hsl(193,90%,50%)">
                        <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
                        <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
                    </g>
                </g>
                <g mask="url(#smiley-mask)">
                    <rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
                    <g fill="none" stroke="hsl(223,90%,50%)">
                        <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
                        <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
                    </g>
                </g>
            </g>
        </svg>}



        </div>

            <div className="main_set1">

            {/* Тема новостоной ленты */}
            <div className="setting">
                <h5>Тема новостной ленты</h5>
                <input type="checkbox" className="custom-checkbox" id="" /> Что говорят дотеры<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Прошедшие матчи<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Мемы<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Новости<br/>
                <input type="checkbox" className="custom-checkbox" id="" /> Всё
            </div>
            
            {/* Фильтр по дате */}
            <div className="filter">
                <h5>Сортировка по дате</h5>
                
                <input type="radio" id="orderChoice1" name="order"   onClick={order_asc} value="По возрастанию"/>
                По возрастанию <img src="/img/filter-top.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/> <br/>
                      
                <input type="radio" id="orderChoice2" name="order" onClick={order_desc}  value="По убыванию"/>
                По убыванию <img src="/img/filter-bottom.png" width={15} height={15} style={{float: "right", marginRight: '3%', marginTop: '3%'}}/>
            </div>
            
            <div className="create">
               <li style={{height: '30px'}}> <Link className='link' to="/Create">Создать статью</Link></li>
            </div>

            <div className="edit">
                <li className='edit_li' style={{height: '30px'}}>Изменить главные новости</li>
            </div>
        </div>

        
        
    
        
    </div>
    
)

}
export default Main;












