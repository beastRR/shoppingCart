import React from "react";

const ProductCard = ({product, addInCart})=>{
   return (
        <div>
            <div className="card mt-2 mb-1">
                <img src={product.small} alt="" className="mb-1"/>
                <p className="text-center "><h3>{product.productName.toUpperCase()}</h3></p>
                <p className="text-center text-info"><h3>$ {product.price}</h3></p>
                <button className="btn btn-warning text-center my-2" onClick={()=>addInCart(product)}>Buy</button>
            </div>

        </div>
    );
}

export default ProductCard;