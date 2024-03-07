import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img1 from "../../Assets/peru.jpg";
import img2 from "../../Assets/mexico.jpg";
import img3 from "../../Assets/angkarwat.jpg";
import img4 from "../../Assets/tajmahal.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "Cultural Relax",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "Cultural Relax",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "Cultural Relax",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "Cultural Relax",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              of the world! Form historical cities to natural specteculars, come
              see the best form
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt="Imagetitle" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Popular;
