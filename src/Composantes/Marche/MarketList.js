import react from "react";
import MarketItem from './MarketListItem';

function MarketList({produit}){
    return(
        <ul>
            {produit.map((item,index)=>(
                <MarketItem key={index}
                nom={item} />
            ))}
        </ul>
    );
}
export default MarketList;