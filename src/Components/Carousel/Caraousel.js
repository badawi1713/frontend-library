import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <section className="carousel-container">
        <div
          className="card-carousel-wrapper js-flickity"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true }'
        >
          <div className="carousel-card">
            <div className="carousel-image-card">
              <img
                src="https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png"
                alt="carousel img"
              />
            </div>
            <div className="carousel-text">
              <h2>Dilan 1990</h2>
              <p>Pidi Baiq</p>
            </div>
          </div>

          <div className="carousel-card">
            <div className="carousel-image-card">
              <img
                src="https://radarmalang.id/file/2018/03/Ubur-ubur.jpg"
                alt="carousel img"
              />
            </div>
            <div className="carousel-text">
              <h2>Ubur-Ubur Lembur</h2>
              <p>Raditya Dika</p>
            </div>
          </div>

          <div className="carousel-card">
            <div className="carousel-image-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg"
                alt="carousel img"
              />
            </div>
            <div className="carousel-text">
              <h2>Laskar Pelangi</h2>
              <p>Andrea hirata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;