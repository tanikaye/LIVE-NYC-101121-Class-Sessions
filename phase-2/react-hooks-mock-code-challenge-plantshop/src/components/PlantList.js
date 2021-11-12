import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant, onUpdatePlant }) {

  const plantCards = plants.map(p => <PlantCard key={p.id} plant={p} onDeletePlant={onDeletePlant} onUpdatePlant={onUpdatePlant} />)
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
