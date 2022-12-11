import React, { useState } from "react";
import MenuItems from "./MenuItems";
import CatagoryFilter from "./CategoryFilter"
function shoppinglist({ details }) {
    const shoppingfilter = details.filter((entry) => {
        return entry.shopping.includes("shopping");
    });
    return (
        <div>
            <div>
                
            </div>
            <CatagoryFilter details={shoppingfilter}/>
        </div>
        
    );
}
export default shoppinglist;