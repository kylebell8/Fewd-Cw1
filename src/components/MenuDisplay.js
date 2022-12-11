import React, { useState } from "react";
import MenuItems from "./MenuItems";
import CatagoryFilter from "./CategoryFilter"

function menudisplay({ details }) {
    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu");
    });
    return (
        <div>
            <div>
                
            </div>
            <CatagoryFilter details={menufilter}/>
        </div>
        
    );
}
export default menudisplay;