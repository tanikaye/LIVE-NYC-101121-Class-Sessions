import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  // this boolean is used to demo common show/hide functionality
  // const [showDiv, setShowDiv] = useState(true)

  // we can use a ternary based on the boolean value of showDiv to say whether React should render a <div> </div> or nothing (null)
  // let detailsToDisplay = showDiv ? <div>Hi, I'm a div!</div> : null;

  // we can assign detailsToDisplay the JSX for one <div></div>  or a whole component; remember, Components are just functions which return more JSX
  // let detailsToDisplay = <Profile />;

  const [selectedPage, setSelectedPage] = useState("profile")


  /* we can use one value in state to switch between rendering various components using a simple JS object, where the object keys match the expected data in state, and the values of those keys are the components to be rendered */
  const detailMap = {
    profile: <Profile/>,
    photos: <Photos/>,
    cocktails: <Cocktails/>,
    pokemon: <Pokemon/>
  }

  return (
    <div>
      <MenuBar selectedPage={selectedPage} onMenuClick={setSelectedPage}/>
      {/* the button just toggles the showDiv boolean in state */}
      {/* <button onClick={() => setShowDiv(!showDiv)}>Show/Hide Div</button> */}

      {/* we can use a logical AND with the boolean to conditionally show/hide a component */}
      {/* {showDiv && detailsToDisplay} */}
      {detailMap[selectedPage]}
    </div>
  );
}

export default MainBox;
