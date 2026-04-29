import react from "react";
import MarketItem from './MarketListItem';

function MarketList({produit}){
    return(
        <div className="listeContenu">
            {produit.map((item,index)=>(
                <MarketItem 
                key={index}
                nom={item.nom}
                prix={item.prix}
                image={item.image}
                />
            ))}
       </div>
        
    );
}
export default MarketList;