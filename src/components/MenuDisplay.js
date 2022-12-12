import React, { useEffect } from "react";
import MenuItems from "./MenuItems";
import CatagoryFilter from "./CategoryFilter"
function Search({ details }) {

    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu");
    });

    useEffect(() => {

    }, [menufilter]);

    return (
        <div>
            <CatagoryFilter details={menufilter} type={"menu"}/>
        </div>
        
    );
}
export default Search;
