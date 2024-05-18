import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Course from "./Course"
import Project from "./Projects"
import Intership from "./Intership"
import About from "./About"
import Contact from './Contact';



function App() {
  
  return(
    <>
    <BrowserRouter>
 <Navbar />
 <Routes>
<Route path='/' element={<Home />}/>
<Route path='/course' element={<Course />}/>
<Route path='/project' element={<Project />}/>
<Route path='/intership' element={<Intership />}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/enquiry' element={<LoginForm />}/>

 </Routes>
  
   
  </BrowserRouter>

   
</>
  )
}

export default App;