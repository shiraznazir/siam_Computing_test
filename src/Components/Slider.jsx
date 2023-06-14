import React, { useEffect, useState } from "react";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";

const styles = {
  imageSlider: {
    display: "flex",
    alignItems: "center",
  },
  dotContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
};

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      const interval = setInterval(goToNextSlide, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <>
      <div style={styles.imageSlider}>
        <ArrowBackIosSharpIcon
          sx={{ color: "#eeeeee" }}
          onClick={goToPreviousSlide}
        />
        <img
          width="280px"
          height="200px"
          src={images[currentIndex]}
          alt={`img${currentIndex + 1}`}
        />
        <ArrowForwardIosSharpIcon
          sx={{ color: "#eeeeee" }}
          onClick={goToNextSlide}
        />
      </div>
      <div style={styles.dotContainer}>
        {images.map((_, index) => (
          <FiberManualRecordSharpIcon
            key={index + 1}
            fontSize="small"
            sx={{ color: currentIndex === index ? "#000000" : "#808080" }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
