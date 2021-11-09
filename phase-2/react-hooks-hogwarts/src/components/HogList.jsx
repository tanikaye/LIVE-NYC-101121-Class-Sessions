import React from 'react';
import HogCard from './HogCard';    

const Hoglist = ({ hogs }) => {
    const pigPen = hogs.map(hog => (
        <HogCard 
            key={hog.name + hog.weight}
            hog={hog}
        />
    ))
    return (
        <div className="ui three stackable cards">
           {pigPen}
        </div>
    );
}

export default Hoglist;
