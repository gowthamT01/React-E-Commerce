import Courses from "./Courses";

import java from './assets/java-img.jpg';
import js from './assets/js-img.jpg';
import py from './assets/py-img.jpg';
import Dev from './assets/Dev-img.jpg';

function CourseList() {

  const courses = [
    {id:1, img: java, name: "Java", age: 22, price: 233 },
    {id:2, img: js, name: "JavaScript", age: 25, price: 300 },
    {id:3, img: py, name: "Python", age: 30, price: 500 },
    {id:4, img: Dev, name: "DevOps", age: 20, price: 400 },
    {id:5, img:js,name:"AI/ML",age:33,price:300},
    {id:6,img:py,name:"Cloud",age:22,price:400}
    
  ];
/*  courses.sort((x,y)=>y.price-x.price) *//* Sorting object using price value */
 courses.sort((x,y)=>x.age-y.age)
/*  filletring  the coursde */
const vfmCourse=courses.filter((course)=>course.price<450)
/* const ageCourse=courses.filter((course)=>course.age<30) */

  const coursesList =vfmCourse.map((course,index) => (
    <Courses
      key={index}
      img={course.img}
      name={course.name}
      age={course.age}
      price={course.price}
    />
  ));

 
  return( <>
  
  {coursesList}
  </>
  )
} 

export default CourseList;
