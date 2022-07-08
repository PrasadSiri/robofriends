import React from 'react';
import Card from './Card';




const CardList = ({robots}) => {

    //Following if block is for testing ErrorBoundry Component.
    // if (true )
    // {
    //     throw new Error("Nooooo")
    // }

    
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