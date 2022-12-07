import React, { useState } from "react";
import MenuItems from "./MenuItems";
function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const filtered = details.filter((entry) => {
        return entry.category.includes(searchField) ;
    });

  return (
    <div>
        <div>
              <input
                type="checkbox"
                onChange={event => {
                  if (event.target.checked) {
                    console.log('✅');
                    setSearchField("main");
                  }                   
                  else {
                    console.log('⛔️');
                    setSearchField("");
                  }
                }}
            />{" "}
            show mains
        </div>
      
        <MenuItems items={filtered}/>
    </div>
    
);



}
export default Search;
