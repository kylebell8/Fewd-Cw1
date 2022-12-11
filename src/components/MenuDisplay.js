import React from "react";
import CatagoryFilter from "./CategoryFilter"

function menudisplay({ details }) {
    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu" || "");
    });
    return (
        <div>
            <div>
                
            </div>
            <CatagoryFilter details={menufilter} type={"menu"}/>
        </div>
        
    );
}
export default menudisplay;