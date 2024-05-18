import React, { useState, useEffect } from "react";
import "./ReviewCard.css";
import axios from "axios";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ReviewCard() {
  const [review, setReview] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  const getAllCourse = async () => {
    await axios.get("https://caddbackend.onrender.com/review").then((res) => {
      setReview(res.data);
    });
  };

  const handleOpen = () => {
    setToggle(true);
    setReviewData({
      img: "",
      name: "",
      coursename: "",
      review: "",
    });
  };

  const handleCloseData = () => {
    setToggle(false);
    getAllCourse();
  };
const handleDataRadioMale = (e)=>{
  
  var imgV = ""
  if(e.target.checked===true){
    imgV =
      "https://i.pinimg.com/564x/49/7d/34/497d34fbefb2d97160d9125b288c7b95.jpg";
  }
   setReviewData({ ...reviewData, "img": imgV });
   console.log(imgV);
}
const handleDataRadioFemale = (e) => {
  var imgV = "";
  if (e.target.checked === true) {
    imgV =
      "https://i.pinimg.com/564x/f2/d8/0d/f2d80d97182d3ee301bbd11677b2d280.jpg";
  }
  setReviewData({ ...reviewData, img: imgV });
  console.log(imgV);
};

  const handleData = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    if (reviewData.id) {
      await axios
        .patch(`https://caddbackend.onrender.com/review/${reviewData.id}`, reviewData)
        .then((res) => {
          console.log(res);
        });
    } else {
      await axios
        .post("https://caddbackend.onrender.com/review", reviewData)
        .then((res) => {
          console.log(res);
        });
        getAllCourse();
    }
    handleCloseData();

    setReviewData({
      img: "",
      name: "",
      coursename: "",
      review: "",
    });
  };

  const handleDelete = async (id) => {
    const isCofirmed = window.confirm(
      "are You Sure want to delete thise review ?"
    );
    if (isCofirmed) {
      await axios
        .delete(`https://caddbackend.onrender.com/review/${id}`)
        .then((res) => {
          setReview(res.data);
          console.log(res.data);
          getAllCourse();
        });
    }
   
  };

  const handleEdite = async (user) => {
    setReviewData(user);
    setToggle(true);
 
  };

  // console.log(reviewData);

  useEffect(() => {
    getAllCourse();
    Aos.init();
  }, []);

  const handleClose = {
    float: "right",
    background: "transparent",
    borderRadius: "10px",
  };

  const toggleStyle = {
    position: "absolute",
    zIndex: "1",
    width: "100%",
    height: "100vh",
    background: "black",
    opacity: "85%",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-3">
        <div className="col-md-12">
          <ScrollAnimation
            animateIn="wobble"
            animateOut="wobble"
            initiallyVisible={true}
          >
            <h1 className="text-center">Student Success Stories</h1>
          </ScrollAnimation>
          <p
            style={{ fontSize: "1.2rem", fontWeight: "550" }}
            className="text-center"
          >
            Get inspired to create your own success story !
            <button className="btn" onClick={handleOpen}>
              Add Your Review
            </button>
          </p>
          {toggle ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={toggleStyle}
            >
              <div className="col-md-4">
                <div
                  className="card"
                  style={{
                    opacity: "100%",
                    backgroundColor: "white",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <button
                          type="button"
                          style={handleClose}
                          onClick={handleCloseData}
                        >
                          X
                        </button>
                        <label htmlFor="gender" className="form-label">
                          Gender :
                        </label>
                        <div className="d-flex align-items-center justify-content-around">
                          <div className="form-check">
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              className="form-check-input"
                              
                              onChange={handleDataRadioMale}
                            />
                            <label htmlFor="male" className="form-check-label">
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              name="gender"
                              id="female"
                              className="form-check-input"
                              onChange={handleDataRadioFemale}
                            />
                            <label
                              htmlFor="female"
                              className="form-check-label"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                        <label htmlFor="name" className="form-label">
                          Name :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          required
                          value={reviewData.name}
                          onChange={handleData}
                        />
                        <label htmlFor="coursename" className="form-label">
                          Course :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="coursename"
                          name="coursename"
                          required
                          value={reviewData.coursename}
                          onChange={handleData}
                        />
                        <label htmlFor="review" className="form-label"></label>
                        <textarea
                          name="review"
                          className="form-control"
                          id="review"
                          cols="30"
                          rows="5"
                          required
                          value={reviewData.review}
                          onChange={handleData}
                        ></textarea>
                      </div>
                      <input type="submit" value="Added" className="btn" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {review.map((item) => {
              return (
                <div
                  className="px-2"
                  key={item.id}
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <div className="card" style={{ height: "400px" }}>
                    <div className="card-header" style={{ zIndex: "0" }}>
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-5">
                          <img src={item.img} alt="" className="card-img" />
                        </div>
                        <div className="col-7 d-flex justify-content-around">
                          <div>
                            <div
                              style={{
                                textAlign: "justify",
                                fontWeight: "550",
                              }}
                              className="card-title"
                            >
                              {item.name}
                            </div>
                            <div
                              style={{
                                textAlign: "justify",
                                fontWeight: "550",
                              }}
                              className="card-text"
                            >
                              {item.coursename}
                            </div>
                          </div>
                          <div
                            className="dropstart"
                            style={{
                              position: "relative",
                            }}
                          >
                            <button
                              type="button"
                              style={{
                                width: "5px",
                                border: "none",
                                fontSize: "19px",
                                fontWeight: "800",
                              }}
                              data-bs-toggle="dropdown"
                              data-bs-target=""
                            >
                              :
                            </button>
                            <div className="dropdown-menu">
                              <button
                                type="button"
                                className="border-0 dropdown-item"
                                onClick={() => handleEdite(item)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="border-0 dropdown-item"
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p
                        style={{ textAlign: "justify", fontWeight: "550" }}
                        className="card-text"
                      >
                        {item.review}
                      </p>
                    </div>
                    <div className="card-footer">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
