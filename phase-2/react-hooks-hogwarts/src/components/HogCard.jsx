import React, { useState } from 'react';
import HogDetails from './HogDetails';

const Hogcard = ({hog}) => {
    const [showDetails, setShowDetails] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    function handleDetailsClick(){
        setShowDetails((prevShowDetails) => !prevShowDetails)
    }

    if (isHidden) return null;

    const { name, image } = hog
    
    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                <img src={image} alt="a cute piggy" />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog}/> : null}
            </div>
            <button className="ui button" onClick={handleDetailsClick}>
                {showDetails ? "Less Info": "More Info"}
            </button>
            <button className="ui button" onClick={() => setIsHidden(true)}>
                Hide Me
                {" "}
                <span role="img" aria-label="snout">
                    🐽
                </span>
            </button>
        </div>
    );
}

export default Hogcard;
