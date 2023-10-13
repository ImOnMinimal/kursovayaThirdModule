import "./Full.css"
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Full() {
    const params = useParams();
    const articleId = params.id;

    const [data, setData] = useState([]);
    const [comm, setComm] = useState([]);
    const [liked, setLiked] = useState(false);
    const [disliked, setdisLiked] = useState(false);
    const [loading, setLoading] = useState(false);


    async function add_like() {
        let new_data = {...data};
        await setLiked(true);
        new_data.likes = parseInt(new_data.likes) + 1;
        await setData(new_data)
        await fetch(
            "http://test1/add_likes.php?id=" + articleId
        )
        
    }
    async function remove_like() {
        let new_data = {...data};
        await setLiked(false);
        new_data.likes = parseInt(new_data.likes) - 1;
        await setData(new_data)
        await fetch(
            "http://test1/remove_likes.php?id=" + articleId
        )
        
    }

    async function add_dislike() {
        let new_data = {...data};
        await setdisLiked(true);
        new_data.dislikes = parseInt(new_data.dislikes) + 1;
        await setData(new_data)
        await fetch(
            "http://test1/add_dislikes.php?id=" + articleId
        )
        
    }
    async function remove_dislike() {
        let new_data = {...data};
        await setdisLiked(false);
        new_data.dislikes = parseInt(new_data.dislikes) - 1;
        await setData(new_data)
        await fetch(
            "http://test1/remove_dislikes.php?id=" + articleId
        )
        
    }

    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://test1/index8.php?id=" + articleId
                )
            ).json();

            // set state when the data received
            await setData(data);
            await setLoading(true);
        };

        dataFetch();
    }, []);


    
    useEffect(() => {
        const commDataFetch = async () => {
            const commData = await (
                await fetch(
                    "http://test1/mapcomments.php?post_id=" + articleId
                )
            ).json();

            // set state when the data received
            await setComm(commData);
            await console.log(articleId);
        };

        commDataFetch();
    }, []);

    let comment = '';
    let nickname = 'test' // nickname = localStorage.getItem('login');
    
    function createComment() {
        comment = document.querySelector("#comment").value;

        fetch('http://test1/addComment.php?comment='+comment+'&nickname='+nickname+'&post_id='+articleId,{
        method : 'POST',
        header : {
            "Content-Type" : "applicationn/x-www-form-urlencoded"
        },
        body  : JSON.stringify({action : 1})
        })
        .then (response => response.json())
        .then (response =>{
        console.log(response);
        
        // setT1(response);
        })
        
    }
    return(
        !loading ? <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
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
    </svg> :
        <div className="main_post">
              

                {/* Пост */}
            <div className="post">

                <h5>{data.title}</h5>
                <li style={{fontSize: '13px'}}>{data.subtitle}</li> <br/>
                <li style={{fontSize: '13px'}}>{data.text}</li> <br/>
                <div className="main_like">
                    {/* Лайки */}
                    <div className="like">   
                        <img type='button' style={{marginBottom: '4%'}} className="like_photo" src="../img/like.png" width={18} height={18} onClick={liked ? remove_like : add_like}/> 
                    </div>
                    <div className="like">  
                        <div style={{color: 'green'}} className="count_like">{data.likes}</div>
                    </div>
                    {/* Дизлайки */}
                    <div className="like">
                        <img type='button' style={{marginBottom: '4%'}} className="dislike_photo" src="../img/like.png" width={18} height={18}  onClick={disliked ? remove_dislike : add_dislike} />
                    </div>
                    <div className="like">  
                        <div style={{color: 'red'}} className="count_like">{data.dislikes}</div>
                    </div>

                    {/* назад */}
                    <Link className='link' to="/"><div type='button' className="next">Назад </div></Link>
                </div>
            </div>  

            {/* комментарии */}
            
            <div className="main_com">
                <h4 style={{marginLeft: '2%'}}>Комментарии</h4>
                { loading ? comm.map((elem) => (
                <div>
                    <div className="text_com">
                        <img className="ava" src="./img/ava.png" width={30} height={30}/>
                        <li style={{display: 'inline-block', marginLeft: '2%'}}>{elem.nickname}</li>
                        <li style={{marginLeft: '5%'}}>{elem.comment}</li>
                        {elem.date}
                        <hr></hr>
                    </div>
                </div>)
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


                <div className="create_com">
                    <img className="ava" style={{marginLeft: '1%', marginTop: '1%'}} src="../img/ava.png" width={30} height={30}/>
                    <div className="com">

                    <input className="com" type='text' placeholder='Напишите комментарий' required id='comment'></input>
                        <img type="button" src="../img/add.png" style={{borderRight: '1px solid #5F5C52', marginRight: '5px', paddingRight: '5px'}} width={23} height={15}/>
                        <img type="button" src="../img/send.png" onClick={createComment} width={18} height={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Full;