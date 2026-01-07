

function Courses(props) {
function BuyCourse(discount,e){
  console.log(props.name,"Purchased",discount,"%Discount")
  console.log(e);
}
function ApplyDiscount(disc){
  console.log("Applied ",disc,"% Discount for ",props.name)
}
    return (
   /*   this is for consditional rendering */ props.name &&<div className="card">
        <img className="card-img" src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
        <h2>{props.age} Seats Only</h2>
        <p>{props.price}</p>
        <button onClick={(event)=>BuyCourse(20,event)}>Buy Now</button>
      {/*    <button onClick={(event)=>{BuyCourse(20); console.log(event)}}>Buy Now</button> */}
      <button onClick={()=>ApplyDiscount(30)}>Apply Discount</button>
      </div>
    );
  }
   

export default Courses;
