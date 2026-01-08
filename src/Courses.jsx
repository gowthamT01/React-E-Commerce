import { useState ,useEffect} from "react";


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
useEffect(()=>{
  console.log("inside course Effect")
  console.log(purchased);
});
    return (
   /*   this is for consditional rendering */ props.name &&<div className="card">
        <img className="card-img" src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <h2>{props.age} Seats Only</h2>
        <p>{discount}</p>
       
        <button onClick={(event)=>BuyCourse(20,event)}>Buy Now</button>
      {/*    <button onClick={(event)=>{BuyCourse(20); console.log(event)}}>Buy Now</button> */}
      <button onClick={()=>ApplyDiscount(100)}>Apply Discount</button>
   


      <p>{purchased ? " Already Purchasedc with "+discount+" discount" :"Get it now"}</p>
       <button onClick={()=>props.delete(props.id)}>Delete</button> {/* here we deletebutton delete the content whre the btn is clicked .props.id give the reference */}
      </div>
    );
  }
   

export default Courses;
