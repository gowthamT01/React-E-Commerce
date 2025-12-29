const var1 = "Super Figure";

function Courses(props) {
  // internal css
  const styles = {
    backgroundColor: "green",
    color: "red",
    border: "2px solid black",
    padding: "20px",
    textAlign: "center"
  };
   
  return ( 
    
        <div className="card">
      <img className="card-img"
        src="https://tse4.mm.bing.net/th/id/OIP.TI5kEO4aTFrh8YcIuBHROQHaKU?pid=Api&P=0&h=180"       alt="Shivani Rajashekar"
        
      />

      
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.price}</p>
    </div>
     
   
  );
}

export default Courses;
