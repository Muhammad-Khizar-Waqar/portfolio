import React, { useState, useRef } from "react";
import css from "./Header.module.scss";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineAlignRight } from "react-icons/ai";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
 const [menuOpened, setMenuOpen] = useState(false);
 const headerShadow = useHeaderShadow();
 const menuRef = useRef();

 useOutsideAlerter({
  menuRef,
  setMenuOpen,
 });

 return (
  <motion.div
   initial='hidden'
   whileInView='show'
   variants={headerVariants}
   viewport={{ once: false, amount: 0.25 }}
   className={`bg-primary paddings ${css.wrapper}`}
   style={{ boxShadow: headerShadow }}>
   <div className={`flexCenter innerWidth ${css.container}`}>
    <div className={css.name}>Khizar Waqar</div>
    <ul
     ref={menuRef}
     className={`flexCenter ${css.menu}`}
     style={getMenuStyles(menuOpened)}>
     <li>
      <a href='#services'>Services</a>
     </li>
     <li>
      <a href='#experience'>Experience</a>
     </li>
     <li>
      <a href='#portfolio'>Portfolio</a>
     </li>
     <li className={`flexCenter ${css.phone}`}>
      <a href='tel:+923075245261'>+923075245261</a>
      <BsPhoneVibrate size={"40px"} />
     </li>
    </ul>
    <div
     className={`${css.menuIcon}`}
     onClick={() => setMenuOpen((prev) => !prev)}>
     <AiOutlineAlignRight size={"40px"} />
    </div>
   </div>
  </motion.div>
 );
};

export default Header;
