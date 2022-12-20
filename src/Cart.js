import React,{useState} from "react";
import "./style.css";
import img from "./delete.png";
import empty from "./empty.png";
import load from "./loading.png";


const Cart = ({cartItem,remove,purchase})=>{
    const [msg, setMsg] =useState("");
    var amount=0;
    // var flag=false;
    // const img="https://www.iconsdb.com/icons/preview/orange/delete-xl.png";
    cartItem.forEach(item => {
        amount=amount + item.price;
    });

    const onPurchase=(purchase)=>{
        
        
        setMsg("Purchase in process, Please Wait..");
        
        setTimeout(()=>{purchase();
        setMsg("");

        },3000);
        
    
    }
    
    // const deleteItem =(prod)=>{
    //     removeItem(prod);
    // }

    return(
        <div className="cartMain">
           
            {cartItem.map(prod=>(
                <div key={prod.id} >
                <img className="border border-dark rounded cartImg" src={prod.tiny} alt="product-imagee-cart" width={120} />
                <button className=" btn-outline-warning btnRemove" onClick={()=>remove(prod)}>
                    <img  className="delImg" src={img}  alt="" /></button>

                <span className="text-info mx-2">{prod.productName}<br/>
					 <p className="text-center text-danger">${prod.price} </p></span>

                <hr/>
                </div>
                
            ))}

            
             
            {amount===0?(<div className=""><h3 className="text-center mt-3">Cart Is Empty</h3>
            <div className="parentFlex mt-4" > <img className="imgCenter" src={empty} alt="emptyCart" width={120}/></div></div>)
            :(<>
                <h4 className="text-center ">Grand Total</h4>
                <h4 className="text-danger text-center  "><span className="border border-danger">$ {amount}</span></h4>
            <br/>
            <button className="btn btn-success btnCenter" onClick={()=>onPurchase(purchase)}>Purchase</button>
            <p className="text-center text-dark mt-1">{msg} {msg!==""?(<img src={load} alt="loading" width={60}/>):(<></>)} </p>
            

            </>
                

            )}
        </div>
    )
}

export default Cart;
