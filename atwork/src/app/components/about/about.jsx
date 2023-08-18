import React from 'react';
import styles from '../../_sass/About.module.scss';
import aboutImage from '../../assets/about.svg'; // Import your about image

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <h2>About Us</h2>
        <div className={styles.about_image}>
        <img src={aboutImage} alt="About Us" />
      </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          commodo lorem non euismod. Vestibulum eu hendrerit metus, nec fringilla
          lorem.
        </p>
        <p>
          Nulla facilisi. Phasellus varius dui a ex tempus, non viverra enim
          eleifend. Sed venenatis nec risus in gravida.
        </p>
      </div>
    </div>
  );
}

export default About;
