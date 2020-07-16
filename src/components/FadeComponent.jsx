import React, { Fragment } from "react";
import Fade from "react-reveal";

function FadeComponent({children}) {
  return (
    <Fade left casscade duration={1000} delay={500} distance="30px">
      <>{children}</>
    </Fade>
  );
}

export default FadeComponent