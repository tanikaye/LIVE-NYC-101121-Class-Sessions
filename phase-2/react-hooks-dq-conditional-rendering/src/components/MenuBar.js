import React from "react";

function MenuBar({onMenuClick, selectedPage}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  /* I tried changing the <span></span> elements to <button></button> so that the clickable area would be larger; semantic-ui-react might have styled <Button></Button> components that we could import that would have better styling */

  return (
    <div className="ui four item menu">
      <button className={selectedPage ===  "profile" ? "item active": "item"} onClick={() => onMenuClick("profile")}>
        <i className="user large icon" />
      </button>

      <button className={selectedPage ===  "photos"? "item active":"item"} onClick={() => onMenuClick("photos")}>
        <i className="photo large icon" />
      </button>

      <button className={selectedPage === "cocktails" ? "item active": "item"} onClick={() => onMenuClick("cocktails")}>
        <i className="cocktail large icon" />
      </button>

      <button className={selectedPage ===  "pokemon" ? "item active": "item"} onClick={() => onMenuClick("pokemon")}>
        <i className=" themeisle large icon" />
      </button>
    </div>
  );
}

export default MenuBar;
