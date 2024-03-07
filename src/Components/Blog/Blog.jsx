import React, { useEffect } from "react";
import "./blog.css";
import img1 from "../../Assets/angkarwat.jpg";
import img2 from "../../Assets/mexico.jpg";
import img3 from "../../Assets/peru.jpg";
import img4 from "../../Assets/tajmahal.jpeg";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const posts = [
  {
    id: 1,
    postImage: img1,
    title: "Beautiful Morocco, let us travel!",
    desc: "The Kingdom of Morocco is a Muslim country in western Noth Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.",
  },
  {
    id: 2,
    postImage: img2,
    title: "Romantic moments under Eiffel Tower",
    desc: "with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world's earliest and greatest civilizations",
  },
  {
    id: 3,
    postImage: img3,
    title: "Let us have an adventure outside Tunisia.",
    desc: "Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terriorism that roll the region",
  },
  {
    id: 4,
    postImage: img4,
    title: "Best Country in East Africa",
    desc: "When kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An inside to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="#"
                  className="flex"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
