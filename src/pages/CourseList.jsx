
import Courses from "./Courses";
import useFetch from "./useFetch";



function CourseList() {
//creating ne state for course fo delete the course delete in the cards
 
const [courses,dummy,error]=useFetch( 'http://localhost:3001/courses')

  
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
 {!error &&  <img className="load-img" src="src/img/load.gif" alt="Loading" />}
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
