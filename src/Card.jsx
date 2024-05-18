import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import axios from "axios";


export default function Card(props) {
  const [cardCourse,setCardCourse] = useState([]);
    const getAllCourse = async () => {
      await axios.get("https://caddbackend.onrender.com/course").then((res) => {
        setCardCourse(res.data);
      });
    };

useEffect(()=>{
  getAllCourse();
  Aos.init();
})
  return (
    <>
    <div className="row">
      {cardCourse.map((datas) => {
     return (
 <div className="col-md-4 " data-aos="fade-up-right" data-aos-duration="1000">
        <div className="card" >
          <div className="card-header"  style={{height:"280px"}}>
            <img className="card-img" height={"100%"} src={datas.img} alt="" />
          </div>
          <div className="card-body">
            <div className="card-tittle">
              <h4
                style={{
                  textAlign: "justify",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {datas.coursename}
              </h4>
            </div>
            <div className="card-tittle">
              <h5>welcome</h5>
            </div>
            <div className="card-text">
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                {datas.classtime}
              </p>
              <div className="dropup">
                <button
                  className="btn btn-primary w-100"
                  data-bs-toggle="dropdown"
                >
                  More Course
                </button>
                <ul className="dropdown-menu grid w-100" style={{height:"400px"}}>
                  <div className="row">
                    {datas.course.map((e, index) => {
                      return (
                        <div className="col-6">
                          <li className="dropdown-item" key={index}>
                            {e}
                          </li>
                        </div>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
     )}
      )}
     
      </div>

    </>

  );
}
