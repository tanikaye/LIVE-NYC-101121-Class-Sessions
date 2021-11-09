import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon: {name, hp, sprites} }) {
  // const { name, hp, sprites} = pokemon
  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprites.front} alt="oh no!" />
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
