import React, { useState, useEffect } from 'react';

const Card = ({content, flipped, matched, onClick}) => {


    return ( 
        <div className={`border shadow-lg text-center rounded-lg p-8 text-3xl ${flipped || matched ? 'bg-pink-300' : 'bg-purple-300'}`}
        onClick={onClick}>
            {flipped || matched ? content : "?"}
        </div>


     );
}
 
export default Card;