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
        fpsLimit: 80,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // 👈 hover effect
            onClick: { enable: true, mode: "push" } // 👈 optional: click to add particles
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 }, // 👈 hover par repel thashe
            push: { quantity: 3 } // 👈 click par new particles add thashe
          }
        },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          opacity: { value: 0.8 },
          links: { enable: true, color: "#ffffff", distance: 180 }
        }
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}
