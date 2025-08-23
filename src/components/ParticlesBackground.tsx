import { useEffect, useRef } from "react";
import OglParticles from "./OglParticles";
import { useTheme } from "../providers/ThemeProvider";

const ParticlesBackground = () => {
  const { theme } = useTheme();

  const particleColor = theme === "light" ? ["#000000"] : ["#ffffff", "#ffffff"];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Fixed behind all content
      }}
    >
      <OglParticles
        particleColors={particleColor}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesBackground;