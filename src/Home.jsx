import React from "react";
import HomeImg from "./HomeImg";
import Objectivet from "./Objective";
// import multiCard from './multiCard'
// import OurStudents from './OurStudents'
// import MultiReviewcard from './MultiReviewcard'
import Aproval from "./Aproval";
import Footer from "./Footer";
import Projects from "./Projects";
import Intership from "./Intership";
import Card from "./Card";
import ReviewCard from "./ReviewCard.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export default function Home() {
  return (
    <>
      <div>
        <HomeImg />
        <div className="container ">
          <Objectivet />
        </div>
        <div className="container ">
          <Card />
        </div>
        <ReviewCard />

        <div className="container">
          <Aproval />
        </div>
        {/* <div className="container">
      <OurStudents />
    </div> */}

        <div className="card">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <h1 className="text-center">Projects And Interships</h1>
          </ScrollAnimation>
          <div className="row">
            <div className="card-group">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <Projects />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <Intership />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#351e5b" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
