## Stories
A user can:
- view all pokemon cards (name, sprite, hp)
- click card to toggle front/back sprite display
- search for a pokemon by name
- add a new pokemon with a form

## Data
```javascript
[
    {
      "id": 2,
      "name": "ivysaur",
      "hp": 60,
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
      }
    },
    {...}
]
```

**Reasoning**
The components are already given, and so is the structure, SO...

My focus needs to be on
- which components hold state
- what to put in state
- where to fetch
- what gets passed down as props
- where to use inverse data flow with callbacks passed down
