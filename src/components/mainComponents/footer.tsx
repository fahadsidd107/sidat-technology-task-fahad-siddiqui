import React from "react";
import styles from "@/styles/Footer.module.css";
import { footer } from "@/constants/footer.constant";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerh1}>We'd love to talk with you</h1>
      </div>
      <div className={styles.footMenu}>
        <div>
          {footer.map((item) => (
            <p>{item.link}</p>
          ))}
        </div>

        {/* // */}
        <div>
          {footer.map((item) => (
            <p>{item.link}</p>
          ))}
        </div>

        {/* // */}

        <div>
          {footer.map((item) => (
            <p>{item.link}</p>
          ))}
        </div>

        {/* // */}

        <div>
          {footer.map((item) => (
            <p>{item.link}</p>
          ))}
        </div>
      </div>

      <div className={styles.end}>
        <p>© 2022 wbsscope. All Rights Reserved. </p>
        <p>Logo Here </p>
        <p>Created by Sidat.net</p>
      </div>
    </div>
  );
}

export default Footer;
