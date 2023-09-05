import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
 return (
  <motion.section
   variants={staggerChildren}
   initial='hidden'
   whileInView='show'
   viewport={{ once: false, amount: 0.25 }}
   className={` paddings ${css.wrapper}`}>
   <a className='anchor' id='portfolio'></a>
   <div className={`flexCenter innerWidth ${css.container}`}>
    <div className={`flexCenter ${css.heading}`}>
     <div>
      <span className='primaryText'>My Latest Work</span>
      <p style={{ marginTop: "10px" }}>
       Perfect solution for digital experiences
      </p>
     </div>
     <span className='secondaryText'>Explore More Works</span>
    </div>

    <div className={`flexCenter ${css.showCase}`}>
     <motion.img
      variants={fadeIn("up", "tween", 0.5, 0.6)}
      src='./showCase1.png'
      alt='Project '
     />
     <motion.img
      variants={fadeIn("up", "tween", 0.7, 0.6)}
      src='./showCase2.png'
      alt='Project '
     />
     <motion.img
      variants={fadeIn("up", "tween", 0.9, 0.6)}
      src='./showCase3.png'
      alt='Project '
     />
    </div>
   </div>
  </motion.section>
 );
};

export default Portfolio;
