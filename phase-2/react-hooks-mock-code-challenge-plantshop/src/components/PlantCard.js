import React, { useState } from "react";

function PlantCard({plant, onDeletePlant, onUpdatePlant}) {

  const {id, name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(price)

  function handleToggleStock(){
    setIsInStock((currInStock) => !currInStock)
  }

  function handlePriceFormSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: updatedPrice })
    })
      .then(r => r.json())
      .then(onUpdatePlant)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {isInStock ? (
        <button onClick={handleToggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStock} >Out of Stock</button>
      )}
      <button className="danger" onClick={() => onDeletePlant(id)}>X</button>
      <form onSubmit={handlePriceFormSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
