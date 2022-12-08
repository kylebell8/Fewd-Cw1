import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

function Search({ data }) {
  const [searchField, setSearchField] = useState("");
  const [FilterDairy, setFilterDairy] = useState(false);
  const [FilterGluten, setFilterGluten] = useState(false);
  const [FilterNuts, setFilterNuts] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [displayMenu, setDisplayMenu] = useState([]);

  const filtered = data.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
});

  const dairyData = (data) => {
    return data.filter((entry) => {
      return entry.allergens.some((item) => { return item.allergens.includes("Dairy") })
    })

  }
  const glutenData = (data) => {
    return data.filter((entry) => {
      return entry.allergens.some((item) => { return item.allergens.includes("Gluten") })
    })

  }
  const nutsData = (data) => {
    return data.filter((entry) => {
      return entry.allergens.some((item) => { return item.allergens.includes("Nuts") })
    })

  }
  
  useEffect(() => {
    if (!FilterDairy && !FilterGluten && !FilterNuts) {
      setDisplayData(filtered)
    }
    
    else {
      let result = filtered
      if (FilterDairy) {
        result = dairyData(result)
      }
      if (FilterGluten) {
        result = glutenData(result)
      }
      if (FilterNuts) {
        result = nutsData(result)
      }
      setDisplayData(result)
    }
  }, [filtered, FilterDairy, FilterGluten, FilterNuts])

  return (
    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>
      <div> <label> Dairy </label> <input type="checkbox" value={FilterDairy} onClick={() => setFilterDairy(!FilterDairy)}

      /></div>
      <div> <label> Gluten </label> <input type="checkbox" value={FilterGluten} onClick={() => setFilterGluten(!FilterGluten)}

      /></div>

      <div> <label> Nuts </label> <input type="checkbox" value={FilterNuts} onClick={() => setFilterNuts(!FilterNuts)}

      /></div>

      <MenuItems items={filtered} />
    </div>

  );



}
export default Search;
