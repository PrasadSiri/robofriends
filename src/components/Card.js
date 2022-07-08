import React from 'react';

const Card = (props) =>{
    return(
        <div className='bg-light-green tc
        dib br5 ma3 pa3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}`} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.completed}</p>
            </div>
        </div>
    );
}

export default Card;