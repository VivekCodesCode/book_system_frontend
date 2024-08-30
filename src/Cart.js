import React, { useEffect, useMemo, useState } from 'react';
import './App.css';  // Assuming you are adding styles in an external CSS file
import { useSelector } from "react-redux";
import { bindActionCreators, useDispatch } from "react-redux";
import { actionCreators } from "./State/index";
import { useNavigate } from 'react-router-dom';
import Navbars from './Navbar';
function App() {
       const arr=useSelector((state) => state.amount.firstArray);
   const[book_data,new_book_data]=useState(arr);
   const[amount,set_amount]=useState(0);
   
   const [quantity,set_quantity]=useState([1,1,1,1,1,1,1,1,1,1]);
   const dispatch=useDispatch();
   const navigate=useNavigate()
   function delete_book(params) {
     new_book_data(
        book_data.filter((val,i,arr)=>{
           return i!=params
        })
     )
     
   }
   function place_order(params) {
    book_data.map((val,i,arr)=>{
      console.log(val)
      dispatch(actionCreators.user_history(val));
    })
    dispatch(actionCreators.clear_cart("val"));//To clear cart from redux
    new_book_data([])
    alert("ORDER PLACED");
    setTimeout(() => {
      navigate("/App")
    }, 1200);
   
   }
   function increase_quantity(params,value) {
    set_quantity(quantity.map((val,i,arr)=>{
      if(params==i){
        set_amount((amount)=>amount+value.Cost)
        return val+1
      }
      return val;
    }))
   }
   function decrease_quantity(params,value) {
    set_quantity(quantity.map((val,i,arr)=>{
      if(params==i){
      if(val>0)  set_amount((amount)=>amount-value.Cost)
      if(val>0)  return val-1
      }
      return val;
    }))
   }
   useEffect(() => {
    if (book_data.length > 0) {
      const totalAmount = book_data.reduce((acc, book) => acc + (book.Cost || 0), 0);
      set_amount(totalAmount);
    } else {
      set_amount(0);
    }
  }, [book_data]);
//    const amount=arr.reduce((x,y)=>{return x.Cost+y.Cost});
  return (
<>
<Navbars/>

   {
  
 book_data.map((val,i,arr)=>{
        console.log(val);
        
    return(
        
        <div className="book_cart-treatment-kit" key={i}>
      <div className="book_cart-text-section">
        <h2 className="book_cart-title">{val.Title}</h2>
        <button onClick={()=>{delete_book(i)}}>Delete</button>
      </div>
      <div className="book_cart-price-section">
        <p className="book_cart-price">₪ {val.Cost}</p>
        <div className="book_cart-quantity-selector">
          <button className="book_cart-decrease" onClick={()=>{decrease_quantity(i,val)}}>−</button>
          <span className="book_cart-quantity">{quantity[i]}</span>
          <button className="book_cart-increase" onClick={()=>{increase_quantity(i,val)}}>+</button>
        </div>
      </div>
      <div className="book_cart-image-section">
        <img src={val.Image} alt="Product" />
      </div>
    </div>
    )
    
    })}
  <center> <button onClick={place_order}>Pay {amount }</button></center> 
    </>
  );
 
}

export default App;



console.log()