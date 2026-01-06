import java from './assets/java-img.jpg';
import js from './assets/js-img.jpg';
import py from './assets/py-img.jpg';
import Dev from './assets/Dev-img.jpg';

import './App.css'
import Navbar from './Navbar';
import Courses from './Courses';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar/>

      <Courses img={java} name="Java" age="25" price="$199" Ratting="⭐⭐⭐⭐" cart="Add to cart" />
      <Courses img={py} name="Python" age="30" price="$299" Ratting="⭐⭐⭐⭐" cart="Add to cart" /* show={true} *//>
      <Courses img={js} name="JavaScript" age="35" price="$400" Ratting="⭐⭐⭐⭐" cart="Add to cart" /* show={true} *//>
      <Courses img={Dev} name="DevOps" age="35" price="$500 0" Ratting="⭐⭐⭐⭐" cart="Add to cart" /* show={true} *//>

      <Footer/>
    </>
  );
}

export default App;
