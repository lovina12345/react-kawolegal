import React from "react"
import { Link } from "react-router-dom";
import '../App.css';


function Home() {
    return(
      <div class="container">
       <div>
        <div className="background.jpg">
          <nav className="navbar navbar-light  navedit">
            <Link className="navbar-brand" to="/">
              <img
                src="Pics/kawo-legal-logo.png"
                width="200px"
                height="100px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
  
            <ul>
              <li className="active-link">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/startup">All Startup</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
  
          <div className="content">
            <h1 className="text-center">KAWOLEGAL</h1>
            <p className="text-center par">
              A collaborative ecosystem for problem <br />
              solvers and support for startups.
            </p>
            <div className="buttonsetup">
              <Link to="./register">
                <button>Register Now!</button>
              </Link>
            </div>
          </div>
        </div>
  
        <footer className="homefooter">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6>&copy; 2021 KawoLegal.All Right reserved</h6>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="logo">
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-instagram"></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
    );  
    

}

export default Home;