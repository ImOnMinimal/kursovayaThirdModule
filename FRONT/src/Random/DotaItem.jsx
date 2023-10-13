import React from 'react';


function Good({id, src}) {
  let src1 = src
  let src2 = src.slice(14);
  src2 = src2.slice(0, -4); 


  
    
    return (
        <>
            <div className='d-block w-25'>
                <div className='dotaitemheight'>{src2}</div><br/>
                <img src={src1} alt='dotaitem'></img>
            </div>
        </>
    );
  }

export default Good