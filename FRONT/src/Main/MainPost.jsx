import "./Main.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function MainPost({id, title, subtitle, text, date, likes, dislikes}) {
  
    const [amountLikes, setAmountLikes] = useState();
    
    const [amountDislikes, setAmountDislikes] = useState();
    
    const [liked, setLiked] = useState(false);
    const [disliked, setdisLiked] = useState(false);
    let articleId = id;

    useEffect(() => {
        setAmountLikes(likes);
        setAmountDislikes(dislikes);
    }, []);

    async function add_like() {
        await setLiked(true);
        setAmountLikes(parseInt(amountLikes)+1);
        console.log(amountLikes);
        await fetch(
            "http://test1/add_likes.php?id=" + articleId
        )
        
    }
    async function remove_like() {
        await setLiked(false);
        setAmountLikes(parseInt(amountLikes)-1);
        await fetch(
            "http://test1/remove_likes.php?id=" + articleId
        )
        
    }

    async function add_dislike() {
        await setdisLiked(true);
        setAmountDislikes(parseInt(amountDislikes)+1);
        await fetch(
            "http://test1/add_dislikes.php?id=" + articleId
        )
        
    }
    async function remove_dislike() {
        await setdisLiked(false);
        setAmountDislikes(parseInt(amountDislikes)-1);
        await fetch(
            "http://test1/remove_dislikes.php?id=" + articleId
        )
        
    }
  

    
    
    return (
      <>
        <div className="post" key={id}>
            <h5>{title}</h5>
            <li style={{ fontSize: '16px' }}>{subtitle}</li>
            <li style={{ fontSize: '16px' }}>{date}</li>
            <div className="main_like">
                {/* Лайки */}
                <div className="like">   
                    <img type='button' style={{marginBottom: '4%'}} className="like_photo" src="../img/like.png" width={18} height={18} onClick={liked ? remove_like : add_like}/> 
                </div>
                <div className="like">  
                    <div style={{color: 'green'}} className="count_like">{amountLikes}</div>
                </div>
                {/* Дизлайки */}
                <div className="like">
                    <img type='button' style={{marginBottom: '4%'}} className="dislike_photo" src="../img/like.png" width={18} height={18}  onClick={disliked ? remove_dislike : add_dislike} />
                </div>
                <div className="like">  
                    <div style={{color: 'red'}} className="count_like">{amountDislikes}</div>
                </div>
                {/* читать далее */}
                <Link className='link' to={"/Full/" + id }><div type='button' className="next">Читать далее </div></Link>
            </div>
        </div>
      </>
    );
  }

export default MainPost