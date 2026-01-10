

import './App.css'
import Navbar from './Navbar';


import Footer from './Footer';
import CourseList from './CourseList';

function App() {
  return (
    <>
    <Navbar/>
  <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      

<CourseList/>
      <Footer/>
    </>
  );
}

export default App;
