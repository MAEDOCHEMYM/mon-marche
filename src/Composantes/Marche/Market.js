import React from "react";
import MarketList from './MarketList';

function Market(){
    const Lesproduit = ["avocat", "sucre","bonbon"];
    return(
        <div>
            <h2>
                Mon marché 
            </h2>
            <MarketList produit={Lesproduit}/>
        </div>
    );
}
export default Market;