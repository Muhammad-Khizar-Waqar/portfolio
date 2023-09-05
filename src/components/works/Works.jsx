import React from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import {
 fadeIn,
 slideIn,
 staggerChildren,
 textVariant2,
 zoomIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";

const Works = () => {
 return (
  <>
   <motion.section
    variants={staggerChildren}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className='anchor' id='experience'></a>
    <div className={`flexCenter innerWidth ${css.container}`}>
     <span className='primaryText yPaddings'>My Work Experience</span>
     <div className={`flexCenter ${css.experiences}`}>
      {workExp.map((items, i) => {
       return (
        <motion.div
         variants={textVariant2}
         className={`flexCenter ${css.exp}`}
         key={i}>
         <div className={css.post}>
          <h1>{items.place}</h1>
          <p>{items.tenure}</p>
         </div>
         <div className={css.role}>
          <h1>{items.role}</h1>
          <p>{items.detail}</p>
         </div>
        </motion.div>
       );
      })}

      <motion.div variants={zoomIn(1, 1)} className={css.progressBar}>
       <motion.div
        variants={fadeIn("down", "tween", 2, 1.5)}
        className={css.line}></motion.div>
       <div>
        <div className={css.circle} style={{ background: "#286F6C" }}></div>
       </div>

       <div>
        <div className={css.circle} style={{ background: "#EEC048" }}></div>
       </div>

       <div>
        <div className={css.circle} style={{ background: "#F26440" }}></div>
       </div>
      </motion.div>
     </div>
    </div>
   </motion.section>
  </>
 );
};

export default Works;
