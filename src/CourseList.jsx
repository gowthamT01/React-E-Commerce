import { useState,useEffect } from "react";
import Courses from "./Courses";

import java from './assets/java-img.jpg';
import js from './assets/js-img.jpg';
import py from './assets/py-img.jpg';
import Dev from './assets/Dev-img.jpg';
import AI from './assets/AIML.jpg';
import AWS from './assets/Aws.jpg';
import DATA from './assets/DATA.jpg';
import UIUX from './assets/UIUX.jpg';

function CourseList() {
//creating ne state for course fo delete the course delete in the cards
  const [courses,setCourses] =useState( [
    {id:1, img: java, name: "Java", age: 30, price: 1499 },
    {id:2, img: js, name: "JavaScript", age: 50, price: 999 },
    {id:3, img: py, name: "Python", age: 40, price: 1999 },
    {id:4, img: Dev, name: "DevOps", age: 20, price: 2999 },
    {id:5, img:AI,name:"AI/ML",age:30,price:4999},
    {id:6,img:AWS,name:"AWS",age:30,price:3999},
        {id:7,img:DATA,name:"Data Analytics",age:30,price:2999},
          {id:7,img:UIUX,name:"UI/UX",age:30,price:2999}
    
  ]);
  useEffect(()=>{
    console.log("use Effect callled")
  })
  /* const [dummy,setDummy]=useState([1,2,3,4,5]);
here created example list set useState */

  function handleDelete(id){
    const newCourses=courses.filter((course)=>course.id != id)//filtering for deleting courses
    console.log(id)
    setCourses(newCourses);//set value to the setcourse

  }
 
/*  courses.sort((x,y)=>y.price-x.price) *//* Sorting object using price value */
 courses.sort((x,y)=>x.age-y.age)
/*  filletring  the coursde */
const vfmCourse=courses.filter((course)=>course.price<9000)
/* const ageCourse=courses.filter((course)=>course.age<30) */

  const coursesList =vfmCourse.map((course) => (
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
