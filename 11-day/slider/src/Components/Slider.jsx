import { useState } from "react";
import styles from "./Slider.module.css";
function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  function handleNext() {
    setImageIndex((index) => {
      const lastIndex = images.length - 1;
      if (index === lastIndex) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }
  function handlePrev() {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      } else {
        return index - 1;
      }
    });
  }
  return (
    <div className={styles.slider}>
      <button onClick={handlePrev}>Prev</button>
      <img src={images[imageIndex]} className={styles.sliderImage} />
      <button onClick={handleNext}> Next </button>
    </div>
  );
}
export default Slider;
