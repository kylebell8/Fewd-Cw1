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
                    console.log('checked');
                    setSearchField("starter");
                  }
                  else {
                    console.log('unchecked');
                    setSearchField("");
                  }
                }}
            />{" "}
            show starter

            <input
                type="checkbox"
                onChange={event => {
                  if (event.target.checked) {
                    console.log('checked');
                    setSearchField("side");
                  }
                  else {
                    console.log('unchecked');
                    setSearchField("");
                  }
                }}
            />{" "}
            show side
        </div>

        
        
      
        <MenuItems items={filtered}/>
    </div>
    
);



}
export default Search;
