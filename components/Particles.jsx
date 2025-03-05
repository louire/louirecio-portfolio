'use client';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#FF7E3B"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: false,
          },
          size: {
            value: 2,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#FF7E3B",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            bounce: false,
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          }
        },
        retina_detect: true
      }}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        zIndex: -1,
        top: 0,
        left: 0,
        backgroundColor: 'transparent'
      }}
    />
  );
}