import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  
  const [plantFormData, setPlantFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleChange(e){
    setPlantFormData({
      ...plantFormData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    onAddPlant(plantFormData)
    setPlantFormData({
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" value={plantFormData.name}  name="name" placeholder="Plant name" />
        <input type="text" value={plantFormData.image}  name="image" placeholder="Image URL" />
        <input type="number" value={plantFormData.price} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
