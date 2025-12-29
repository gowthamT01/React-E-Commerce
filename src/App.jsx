import { useState } from 'react'

import './App.css'
import Navbar from './Navbar';
import Courses from './Courses';
import Footer from './Footer';
import Header from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   
   <Courses name="HTML" age="20" price="$199" />
  
  <Courses name="python" age="22" price="$299" />

  <Courses name="Java" age="23" price="$400" />
  <Courses name="Dedvops" age="35" price="$500"/>
   <Footer></Footer>
   </>
  )
}

export default App;
