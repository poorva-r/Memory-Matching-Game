import React, { useState, useEffect } from 'react';

const Card = ({content, flipped, matched, onClick}) => {


    return ( 
        <div className={`border shadow-lg text-center rounded-lg px-20 py-20 text-5xl ${flipped || matched ? 'bg-pink-300' : 'bg-purple-300'}`}
        onClick={onClick}>
            {flipped || matched ? content : "?"}
        </div>


     );
}
 
export default Card;