import React from "react";
import MarketList from './MarketList';
import './Market.css'

function Market(){
     const Lesproduit = [
        {nom:"avocat",prix: 2000,image:"https://tse2.mm.bing.net/th/id/OIP.zPetcCp8u8Rj2YteHxe5QQHaG9?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {nom:"Lait",prix: 500,image:"https://maxmartonline.com/images/thumbs/0016456_cowbell-premium-milk-powder-sachet-360g.jpeg"},
        {nom: "sucre", prix:400,image:"https://tse4.mm.bing.net/th/id/OIP.ou4essshawgEePOA8NkuywHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"}];
    return(
        <div className="iphone-screen">
<div className="header">
<h2>Mes Produits</h2>
<span className="close-icon">
    x
</span>
</div>     
            <MarketList produit={Lesproduit}/>
            <div className="footer-black">
                <span className="total-label">
                    Total Price
                </span>
                <span className="total-value">
                    2900 FC
                </span>
            </div>
        </div>
    );
}
export default Market;