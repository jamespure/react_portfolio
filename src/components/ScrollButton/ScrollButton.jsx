import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className="scroll-icon">
            <BsArrowUp size={20} />
          </i>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
