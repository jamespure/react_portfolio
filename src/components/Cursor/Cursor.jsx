import { useEffect } from "react";
import { useRef } from "react";
import OnLink from "./OnLink";
import classes from './cursor.module.css'
const Cursor = () => {
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarge = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };
  const toggleCursorSize = () => {
    if (cursorEnlarge.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };
  const mouseOverEvent = () => {
    cursorEnlarge.current = true;
    toggleCursorSize();
  };
  const mouseOutEvent = () => {
    cursorEnlarge.current = false;
    toggleCursorSize();
  };
  const mouseEnterEvent = () => {
    cursorEnlarge.current = true;
    toggleCursorVisibility();
  };
  const mouseLeaveEvent = () => {
    cursorEnlarge.current = false;
    toggleCursorVisibility();
  };
  // const Link = ({ mouseOverEvent,mouseEnterEvent})
  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };
  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  });

  return (
    <>
      <div ref={dotOutline} className={classes.cursorDotOutline}></div>
      <div ref={dot} className={classes.cursorDot}></div>

      <div className={classes.linksContainer}>
        {[].map(
          (
            i //...Array().keys()
          ) => (
            <OnLink
              key={i}
              mouseOverEvent={mouseOverEvent}
              mouseOutEvent={mouseOutEvent}
          />
          )
        )}
      </div>
    </>
  );
};

export default Cursor;
