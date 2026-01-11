function Navbar(){
    return(
        <nav>
        <div className="header-logo">
            <h1>GrowTech</h1>
        </div>
    <div className="header-body">

        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Contact us</li>
            <li>About US</li>
        </ul>
          

        

    </div>
        <div className="sign-in">
        <button>Sign Up</button>
    </div>
    <div className="screen-mode">
     <select name="screen-mode" id="screen-mode">
        <option value="light">☀️</option>
        <option value="dark">🌙</option>
     </select>
    </div>
  
        </nav>
    );

}
export default Navbar;