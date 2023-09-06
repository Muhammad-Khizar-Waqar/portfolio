import React from "react";
import css from "./Hero.module.scss";
import { PiCertificateLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
 return (
  <section className={`paddings ${css.wrapper}`}>
   <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`innerWidth ${css.container}`}>
    <div className={`flexCenter ${css.upperElement}`}>
     <motion.span
      variants={fadeIn("right", "tween", 0.2, 1)}
      className='primaryText'>
      Hey there, <br /> I'm Khizar
     </motion.span>

     <motion.span
      variants={fadeIn("left", "tween", 0.2, 1)}
      className='secondaryText'>
      I design beautiful simple <br /> things, And I love what i do
     </motion.span>
    </div>

    {/* Person Image */}
    <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className={css.person}>
     <motion.img
      variants={slideIn("up", "tween", 0.5, 1.3)}
      className={css.person}
      src='./public/developer.png'
      alt='Developer'
     />
    </motion.div>

    <div className={css.lowerElement}>
     <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className={css.experience}>
      <div className='primaryText'>1</div>
      <div className='secondaryText'>
       <div>Years</div>
       <div>Experience</div>
      </div>
     </motion.div>

     <motion.div
      variants={fadeIn("left", "tween", 0.2, 1)}
      className={css.certified}>
      <a
       className={css.certifiedLink}
       target='_blank'
       href='https://coursera.org/share/59ef62f1fb91abeb013ba1de5752004c'>
       <PiCertificateLight size={"4rem"} />
       <span>Certified Coursera</span>
       <span>JavaScript Developer</span>
      </a>
     </motion.div>
    </div>
   </motion.div>
  </section>
 );
};

export default Hero;
