import { useState } from "react";
import styles from "./Accordian.module.css";
function Accordian() {
  const [accordians, setAccordians] = useState([
    {
      id: "1",
      heading: "What is netflix",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      isOpen: false,
    },
    {
      id: "2",
      heading: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      isOpen: true,
    },
    {
      id: "3",
      heading: "Where I can watch on netflix",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      isOpen: false,
    },
  ]);
  return (
    <div>
      <h2 className={styles.mainHeading}>Frequently asked questions</h2>
      <div className={styles.accordianWrapper}>
        {accordians.map((accordian) => {
          return (
            <div key={accordian.id} className={styles.accordian}>
              <div className={styles.accordianHeading}>
                <h3>{accordian.heading}</h3>
                <button>{accordian.isOpen ? "X" : "+"}</button>
              </div>
              <div
                className={`${styles.accordianContent} ${
                  accordian.isOpen ? styles.open : ""
                }`}
              >
                <p>{accordian.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accordian;
