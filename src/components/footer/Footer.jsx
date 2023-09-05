import React from "react";
import css from "./footer.module.scss";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
 return (
  <motion.section
   variants={staggerChildren}
   initial='hidden'
   whileInView='show'
   viewport={{ once: false, amount: 0.25 }}
   className={`paddings ${css.wrapper}`}>
   <motion.div
    variants={footerVariants}
    className={`flexCenter innerWidth yPaddings ${css.container}`}>
    <div className={css.left}>
     <span className='primaryText'>
      Let's make something
      <br />
      amazing together.
     </span>
     <span className='primaryText'>
      Start by{" "}
      <a href='tel:+923075245261' target='_blank' rel='noopener noreferrer'>
       saying hi
      </a>
     </span>
    </div>

    <div className={css.right}>
     <div className={css.info}>
      <span className='secondaryText'>Information</span>
      <p>Johar town Lahore</p>
     </div>
     <div className={css.menu}>
      <li>Services</li>
      <li>Experience</li>
      <li>Works</li>
     </div>
    </div>
   </motion.div>
  </motion.section>
 );
};

export default Footer;
