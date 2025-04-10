"use client";

import { useSwiper} from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"


const WorkSlideBtns = ({ContainerStyle,btnStyle,iconStyle}) => {
    const swiper = useSwiper()
  return (
    <div className={ContainerStyle}>
      <button className={btnStyle}>
        <PiCaretLeftBold className={iconStyle} onClick={()=> swiper.slidePrev()}/>
      </button>
      <button className={btnStyle}>
        <PiCaretRightBold className={iconStyle} onClick={()=> swiper.slideNext()}/>
      </button>
    </div>
  )
}

export default WorkSlideBtns
