import { useState } from "react";


function Courses(props) {
 const [purchased,setPurchased] = useState(false);
 const [discount,setDiscount]=useState(props.price);
 
 function BuyCourse(discount,e){
  console.log(props.name,"Purchased",discount,"%Discount")
  console.log(e);
  setPurchased(true);
  
  console.log(setPurchased);
 
}
function ApplyDiscount(disc){
  console.log("Applied ",disc,"% Discount for ",props.name)
  setDiscount(true)

  setDiscount(discount-disc)
}
    return (
   /*   this is for consditional rendering */ props.name &&<div className="card">
        <img className="card-img" src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <h2>{props.age} Seats Only</h2>
        <p>{discount}</p>
        <button onClick={(event)=>BuyCourse(20,event)}>Buy Now</button>
      {/*    <button onClick={(event)=>{BuyCourse(20); console.log(event)}}>Buy Now</button> */}
      <button onClick={()=>ApplyDiscount(30)}>Apply Discount</button>
      <p>{discount ? discount+ " Discount applied":"0% Discount Applied"}</p>
      <p>{purchased ? " Already Purchasedc with "+discount+" discount" :"Get it bow"}</p>
      
      </div>
    );
  }
   

export default Courses;
