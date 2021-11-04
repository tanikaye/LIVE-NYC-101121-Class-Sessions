import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`



function BabyHog({name, hobby, eyeColor}) {
  const [weight, setWeight] = useState(200)

  const eyeColorMapper = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby
  }

  function handleChangeWeight(e) {
    const newWeight = e.target.name === "+" ? weight + 10 : weight - 10
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    setWeight(newWeight)
  }

  function chooseColor(){
    let babyImg
    if (eyeColor == "blue"){
      babyImg = BlueBaby
    } else if (eyeColor == "sun") {
      babyImg = SunBaby
    } else if (eyeColor == "glowing") {
      babyImg = GlowingBaby
    }
    return babyImg
  }

  // let babyImg;
  // switch (eyeColor){
  //   case "blue":
  //     babyImg = BlueBaby
  //     break
  //   case "sun":
  //     babyImg = SunBaby
  //     break
  //   case "glowing":
  //     babyImg = GlowingBaby
  //     break
  //   default:
  //     babyImg = normalBaby
  // }

  return (
    <li className="hogbabies">
      {/* <h1>{props.name}</h1> */}
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby} </h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={chooseColor()}
          // src={eyeColorMapper[eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
