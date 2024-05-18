import React from 'react'
import './navStyle.css';
import logo from "./Images/logo.jpg"
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg">
<div className="navbar-header">
   <img src={logo} alt="" />
</div>
<button className="btn navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navCon">X</button>
<div className='navbar-collapse collapse' id="navCon">

<ul className="navbar-nav">
    <Link to="/" className='nav-link'>
        <li>Home</li>
    </Link>
    <Link to="/course" className='nav-link'>
        <li>Courses</li>
    </Link>
    <Link to="/project" className='nav-link'>
        <li>Projects</li>
    </Link>
    <Link to="/intership" className='nav-link'>
        <li>Intership</li>
    </Link>
    <Link to="/contact" className='nav-link'>
        <li>Contact-Us</li>
    </Link>
    <Link to="/about" className='nav-link'>
        <li>About</li>
    </Link>
    <Link to="/enquiry" className='nav-link btn text-center text-white enquirybtn '>
        <li>Enquiry Us</li>
    </Link>
</ul>

{/* <ul className="navbar-nav" >
    <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggler" data-bs-toggle="dropdown">Courses</a>
        <div className="dropdown-menu">
        <a href="#" className="dropdown-item nav-link">Civil</a>
        <a href="#" className="dropdown-item nav-link">Mechanical</a>
        <a href="#" className="dropdown-item nav-link">Electrical</a>
        <a href="#" className="dropdown-item nav-link">Electronic</a>
        <a href="#" className="dropdown-item nav-link">IT Course</a>
        <a href="#" className="dropdown-item nav-link">Business Development</a>
        <a href="#" className="dropdown-item nav-link">Management</a>
        <a href="#" className="dropdown-item nav-link">Designing</a>
        <a href="#" className="dropdown-item nav-link">Spoken English</a>
        </div>
        </li>
        <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggler" data-bs-toggle="dropdown">Projects</a>
        <div className="dropdown-menu">
        <a href="#" className="dropdown-item nav-link">School Project</a>
        <a href="#" className="dropdown-item nav-link">Enginearing Project</a>
        <a href="#" className="dropdown-item nav-link">College Project</a>
        <a href="#" className="dropdown-item nav-link">Intership Project</a>
        <a href="#" className="dropdown-item nav-link">Website & App Project</a>
        </div>
        </li>
        <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggler" data-bs-toggle="dropdown">Internship</a>
        <div className="dropdown-menu">
        <a href="#" className="dropdown-item nav-link">School Internship</a>
        <a href="#" className="dropdown-item nav-link">College Internship</a>
        <a href="#" className="dropdown-item nav-link">Industrial Internship</a>
        <a href="#" className="dropdown-item nav-link">IT Internship</a>
        </div>
        </li>
        <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggler" data-bs-toggle="dropdown">About</a>
        <div className="dropdown-menu">
        <a href="#" className="dropdown-item nav-link">Contact Info</a>
        </div>
        </li>
        
<a href={LoginForm()} className='btn btn-primary enquirybtn'>Enquiry Us</a>
</ul> */}
</div>
    </nav>
    
    </>
  )
}
