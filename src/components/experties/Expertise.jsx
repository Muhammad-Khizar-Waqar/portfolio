import React from "react";
import css from "./Expertise.module.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Expertise = () => {
 return (
  <motion.section
   variants={staggerContainer}
   initial='hidden'
   whileInView='show'
   viewport={{ once: false, amount: 0.25 }}
   className={`paddings ${css.wrapper}`}>
   <a className='anchor' id='services'></a>
   <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
    <div className={css.leftSide}>
     {projectExperience.map((items, i) => {
      return (
       <motion.div
        variants={fadeIn("right", "tween", (i + 1) * 0.3, 1)}
        className={css.Expertise}
        key={i}>
        <div className='flexCenter' style={{ background: items.bg }}>
         <items.icon color='#fff' size='25px' />
        </div>
        <div>
         <span>{items.name}</span>
         <span className='secondaryText'>{items.projects} Projects</span>
        </div>
       </motion.div>
      );
     })}
    </div>

    <motion.div variants={textVariant(0.5)} className={css.rightSide}>
     <span className='primaryText'>What Do I Help</span>

     {WhatDoIHelp.map((items, i) => {
      return (
       <div className='secondaryText' key={i}>
        {items}
       </div>
      );
     })}

     <div className={`flexCenter ${css.stats}`}>
      <div className={`flexCenter ${css.stat}`}>
       <span className='primaryText'>60+</span>
       <span className='secondaryText'>Projects Completed</span>
      </div>
      <div className={`flexCenter ${css.stat}`}>
       <span className='primaryText'>80+</span>
       <span className='secondaryText'> Happy Client</span>
      </div>
     </div>
    </motion.div>
   </div>
  </motion.section>
 );
};

export default Expertise;
