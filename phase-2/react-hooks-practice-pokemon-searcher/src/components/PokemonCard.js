import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon: {name, hp, sprites} }) {
  // the syntax above in parameters destructures keys from a pokemon object nested inside the props object in one step
  // you could accomplish the same in 2 steps by first destructuring the pokemon object from props
  // with ({ pokemon }) in parameters, then:
  // const { name, hp, sprites} = pokemon

  const [showFront, setShowFront] = useState(true)

  const handleClick = () => {
    // writing out a callback function as the argument to setShowFront() assures us that we won't get into any trouble with the async nature of state setters
    setShowFront((currShowFront) => !currShowFront)
    // setShowFront(!showFront) // this will work a lot of the time, but has some risk
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
