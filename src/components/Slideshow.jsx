import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <button className="slideshow__arrow slideshow__arrow--left" onClick={previousSlide}>
            ❮
          </button>

          <button className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide}>
            ❯
          </button>

          <span className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;