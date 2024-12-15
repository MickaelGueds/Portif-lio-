import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // Carrega os presets do tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Fundo dentro da seção
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
