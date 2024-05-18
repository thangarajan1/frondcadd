import React from 'react'
import img from "./Images/OurStudens/1.webp"

export default function OurStudents() {
  return (
   <>
   <div className="row">
    <div className="col-md-6" style={{marginTop:"80px"}}>
        <h1>Hear from Our Students</h1>
        <p>CADD Expert students talk about their enjoyable learning experiences that included practical training, best practises, job prospects, and exposure to reputable businesses and organisations.</p>
        <a href="#" style={{color:"black",fontSize:"20px"}}>Seee More Testimonial <i class="fa-solid fa-circle-arrow-right"></i></a>
    </div>
    <div className="col-md-6">
        <div className="card">
            <div className="card-body">
                <img src={img} className='card-img' alt="" />
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}
