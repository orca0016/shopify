import React, { useCallback } from "react";
import { error1 } from "../assets";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
const Error = () => {
  // const particlesInit = async (engine) => {
  //   await loadFull(engine);
  // };

  // const particlesLoaded = async (container) => {
  //   await console.log(container);
  // };
  return (
    <div className="h-[100vh] div-error">
      <img className="img-error" src={error1} alt="error img " />
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      /> */}
    </div>
  );
};

export default Error;
