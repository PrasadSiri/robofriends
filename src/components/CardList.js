import React from 'react';
import Card from './Card';




const CardList = ({robots}) => {

    
    const cardArray = robots.map((user, i) => {
        return( 
        <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            title={robots[i].title} 
            completed={robots[i].completed} />
        )
    })

    return(
        <div>      
            {cardArray}      
        </div>
    );
}

export default CardList;