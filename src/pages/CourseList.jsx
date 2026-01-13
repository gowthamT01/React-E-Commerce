import { useState,useEffect } from "react";
import Courses from "./Courses";



function CourseList() {
//creating ne state for course fo delete the course delete in the cards
  const [courses,setCourses] =useState();
  const [dummy,setDummy]=useState(false);
  const [error,setError]=useState(null);
  useEffect(()=>{
    setTimeout(()=>{
   
   
    fetch('http://localhost:3001/courses')//api fetching
    .then(response=>{
if(!response.ok){//if api not fetshed ot give custom error
throw Error("Could't retrive data")
}
      console.log(response)
     return response.json();//returning value ad json

    })
    .then (data=>setCourses(data))//adding data to setCourse objerct
    .catch((error)=>{
      console.log(error.message)
      setError(error.message)//handling error if api is not fetched

    })
    },2000);
},[]);

  
  /* const [dummy,setDummy]=useState([1,2,3,4,5]);
here created example list set useState */

  function handleDelete(id){
   const newCourses=courses.filter((course)=>course.id != id)//filtering for deleting courses
    console.log(id)
    setCourses(newCourses);//set value to the setcourse


  }
 
/*  courses.sort((x,y)=>y.price-x.price) *//* Sorting object using price value */
 //courses.sort((x,y)=>x.age-y.age)
/*  filletring  the coursde */
//const vfmCourse=courses.filter((course)=>course.price<9000)
/* const ageCourse=courses.filter((course)=>course.age<30) */
if(!courses){
 return( <>
 {!error &&  <img src="src/img/load.gif" alt="Loading" />}
{error&&<p>{error}</p>}
  </>)
} 
  const coursesList =courses.map((course) => (
    <Courses
      key={course.id}
      img={course.img}
      name={course.name}
      age={course.age}
      price={course.price}
delete={handleDelete}

id={course.id}
    />
  ));

 
  return( <>
  
  {coursesList}

  </>
  )
} 

export default CourseList;
