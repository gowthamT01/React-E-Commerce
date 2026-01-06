import PropTypes from 'prop-types'
function Courses(props) {
 /*  if(props.show==true){ */
  return ( 
    <div className="card">
      <img className="card-img" src={props.img} alt={props.name} />
      <h1>{props.name}</h1>
      <h2>{props.age} Seats Only</h2>
      <p>{props.price}</p>
      <p>{props.Ratting}</p>
      <button>{props.cart}</button>
    </div>
   ); 
   Courses.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,

   }
   /*
}
else{
  return(itt foryarn add prop-types
 else block for conditional rencerinfg
    <div className="card">Course not available</div>
  ) */
}


export default Courses;
