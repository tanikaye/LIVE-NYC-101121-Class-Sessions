import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setPlants)
  }, [])

  function handleAddPlant(newPlant){
    const config = {
      method: 'POST', 
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: parseFloat(newPlant.price)
      })
    }
    fetch(url, config)
      .then(r => r.json())
      .then(resPlant => setPlants([...plants, resPlant])) // pessimistic rendering
  }

  function handleDeletePlant(id){
    fetch(url + `/${id}`, { method: "DELETE"})
    const updatedPlants = plants.filter(plant => plant.id !== id)
    setPlants(updatedPlants)
  }

  function handleUpdatePlant(updatedPlant){
    console.log('updatedPlant: ', updatedPlant);
    const updatedPlants = plants.map(plant => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  const displayedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} onDeletePlant={handleDeletePlant} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
