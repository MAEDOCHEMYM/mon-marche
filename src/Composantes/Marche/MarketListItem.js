import react from "react";
function MarketListItem({nom, prix, image}){
    return(
<div className="arcticles">
    <div className="image">
        <img src={image} alt={nom}/>
    </div>
    <div className="libellé">
        <span className="labelProduit">avocat</span>
        <h3>{nom}</h3>
        <p className="prix">{prix}</p>
    </div>
    <div className="status-indicator">
    <span className="dot-green"></span>
</div>
</div>

    );
}

export default MarketListItem;