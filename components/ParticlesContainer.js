import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particleInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleLoaded = useCallback(async () => {}, []);

  return (
    <div className="w-screen h-screen overflow-hidden absolute top-0 left-0">
      <Particles
        className='w-full h-full absolute translate-z-0'
        id='tsparticles'
        init={particleInit}
        loaded={particleLoaded}
        options={{
          fullScreen: {
            enable: true,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: 'true',
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#e68e2e',
            },
            links: {
              color: '#f5d393',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'square',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
