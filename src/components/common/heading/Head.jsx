import React from "react";
import styles from "./Header.module.css";

const Head = () => {
  return (
    <>
      <section className={styles.head}>
        <div className={`${styles.container} ${styles.flexSB}`}>
          <div className={styles.logo}>
            <h1>ACADEMIA</h1>
            <span>OUTLINE EDUCATION & LERNING</span>
          </div>

          <div className={styles.social}>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
