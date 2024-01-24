import { useState } from "react";

import styles from "./Accordian.module.css";
function Accordian({ accordians: myAccordians }) {
  const initialAccordians = myAccordians.map((accordian, index) => {
    return { ...accordian, id: index.toString(), isOpen: false };
  });
  const [accordians, setAccordians] = useState(initialAccordians);
  function closeAccordian(id) {
    console.log("close");
    setAccordians((accordians) => {
      return accordians.map((accordian) => {
        if (accordian.id === id) {
          // close
          return { ...accordian, isOpen: false };
        } else {
          return { ...accordian };
        }
      });
    });
  }
  function openAccordian(id) {
    console.log("open");
    setAccordians((accordians) => {
      return accordians.map((accordian) => {
        if (accordian.id === id) {
          // close
          return { ...accordian, isOpen: true };
        } else {
          return { ...accordian, isOpen: false };
        }
      });
    });
  }
  return (
    <div>
      <h2 className={styles.mainHeading}>Frequently asked questions</h2>
      <div className={styles.accordianWrapper}>
        {accordians.map((accordian) => {
          return (
            <div key={accordian.id} className={styles.accordian}>
              <div className={styles.accordianHeading}>
                <h3>{accordian.heading}</h3>
                {accordian.isOpen ? (
                  <button onClick={() => closeAccordian(accordian.id)}>
                    x
                  </button>
                ) : (
                  <button onClick={() => openAccordian(accordian.id)}>+</button>
                )}
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

// if we close button
// close that accordian

// if we click on open open
// open that accordian and close other accordians

export default Accordian;
