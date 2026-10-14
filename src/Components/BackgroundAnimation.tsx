import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 30,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          }
        },
        particles: {
          number: { value: 25 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.8 },
          links: { enable: true, color: "#ffffff", distance: 180 }
        },
        responsive: [
          {
            maxWidth: 1024,
            options: {
              particles: {
                number: { value: 12 },
                move: { speed: 0.7 },
              }
            }
          }
        ]
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}
