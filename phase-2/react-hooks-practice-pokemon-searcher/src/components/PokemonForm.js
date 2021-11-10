import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })
  // you could also have separate state variables for each input, such as
  // const [name, setName] = useState("")
  // const [hp, setHp] = useState("")
  // etc.

  // this approach lets you have one handleChange() for all of your inputs
  function handleChange(e){
    setFormData({
      ...formData,
      // [e.target.name] is a computed value, so it lets us use the name attribute from the <input> as the key to the matching value in our formData object
      // this only works if keys in your formData object in state match the name attributes of your form <input>s exactly
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(){
    // Semantic UI's React Form Component handles preventDefault() automatically! 

    // our formData object shape doesn't match the shape of our pokemon objects from the database, so we must
    // compose a new object using the values in formData
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    // I like to compose my fetch options object outside of the fetch for readability
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }
    // POST the new pokemon object to the database
    fetch("http://localhost:3001/pokemon", config)
      .then(res => res.json())
      // we expect json-server to send back the newly created pokemon obj with an id
      // send that object to the parent as an argument to a callback function
      .then(onAddPokemon)
    // reset the form (you could make this part of the Promise chain if you're worried about erasing the form data before POSTing)
    setFormData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            // if you had separate state vars for each input, you'd have to do something like
            // onChange={(e) => setName(e.target.value)}
            />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={formData.hp}
            onChange={handleChange}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
            />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
