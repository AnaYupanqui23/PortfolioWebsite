import { useEffect, useState } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const base = import.meta.env.BASE_URL;

export default function Loading({ onComplete }) {
  const [phase, setPhase] = useState('gradient'); // gradient → logo → exit

  useEffect(() => {
    // Phase 1 — gradient fades in for 1.5s then trigger logo
    const logoTimer = setTimeout(() => setPhase('logo'), 500);

    // Phase 3 — exit fade
    const exitTimer = setTimeout(() => setPhase('exit'), 1800);

    // Phase 4 — tell App we're done
    const doneTimer = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div className={`loading-screen ${phase === 'exit' ? 'loading-exit' : ''}`}>
      
      {/* GRADIENT BACKGROUND */}
      <div className={`loading-gradient ${phase !== 'gradient' ? 'loading-gradient--visible' : ''}`}>
        <ShaderGradientCanvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          pointerEvents="none"
        >
          <ShaderGradient
            key="gradient-inner"
            type="waterPlane"
            animate="on"
            uTime={0.2}
            uSpeed={0.2}
            uStrength={2.5}
            uDensity={5}
            uFrequency={5.5}
            color1="#cfcadc"
            color2="#edc8e5"
            color3="#C4A882"
            wireframe={false}
            shader="defaults"
            rotationX={0}
            rotationY={0}
            rotationZ={180}
            positionX={0}
            positionY={0}
            positionZ={0}
            enableTransition={false}
            cDistance={5}
            cameraZoom={1}
          />
        </ShaderGradientCanvas>
      </div>

      {/* LOGO */}
      {phase !== 'gradient' && (
        <img
          src={`${base}website-logos/favicon-long1.png`}
          alt="Ana Paula"
          className={`loading-logo ${phase === 'logo' ? 'loading-logo--visible' : ''}`}
        />
      )}

    </div>
  );
}