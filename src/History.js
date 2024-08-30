import React from "react";
import { useSelector } from "react-redux";
import Navbars from "./Navbar";
function History(params) {
    const book_data=useSelector((state) => state.amount.user_history);
    return (
        <>
        <Navbars/>
        <center>
        <h1>
            Order History
        </h1>
        </center>
           {
          
         book_data.map((val,i,arr)=>{
                console.log(val);
                
            return(
                
                <div className="book_cart-treatment-kit" key={i}>
              <div className="book_cart-text-section">
                <h2 className="book_cart-title">{val.Title}</h2>
             
              </div>
              <div className="book_cart-price-section">
                <p className="book_cart-price">₪ {val.Cost}</p>
                <div className="book_cart-quantity-selector">
                 
                </div>
              </div>
              <div className="book_cart-image-section">
                <img src={val.Image} alt="Product" />
              </div>
            </div>
            )
            
            })}
        
            </>
          );
}
export default History;