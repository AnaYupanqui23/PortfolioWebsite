import { useEffect, useRef } from 'react';

export default function Hero() {
    const boardRef = useRef(null);
    const currentlyRef = useRef(null);

    useEffect(() => {
        const board = boardRef.current;
        if (!board) return;

        const magnets = Array.from(board.querySelectorAll('.magnet'));
        const boardRect = board.getBoundingClientRect();

        // Initialise state for each magnet
        const states = magnets.map((el) => {
            const rect = el.getBoundingClientRect();
            return {
            el,
            x: rect.left - boardRect.left,
            y: rect.top - boardRect.top,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            width: rect.width,
            height: rect.height,
            };
        });

        // Set initial positions
        states.forEach(({ el, x, y }) => {
            el.style.position = 'absolute';
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        });

        // Get the static obstacle (currently text) bounds relative to board
        const getObstacleBounds = () => {
        const boardRect = board.getBoundingClientRect();
        const textRect = currentlyRef.current.getBoundingClientRect();
        return {
            x: textRect.left - boardRect.left,
            y: textRect.top - boardRect.top,
            width: textRect.width,
            height: textRect.height,
        };
        };

        const PADDING = 6; // minimum gap between magnets

        function resolveCollisions() {
            for (let i = 0; i < states.length; i++) {
            for (let j = i + 1; j < states.length; j++) {
                const a = states[i];
                const b = states[j];

                const overlapX = (a.width / 2 + b.width / 2 + PADDING) - Math.abs((a.x + a.width / 2) - (b.x + b.width / 2));
                const overlapY = (a.height / 2 + b.height / 2 + PADDING) - Math.abs((a.y + a.height / 2) - (b.y + b.height / 2));

                if (overlapX > 0 && overlapY > 0) {
                // Push apart on the axis of least overlap
                if (overlapX < overlapY) {
                    const push = overlapX / 2;
                    if (a.x < b.x) {
                    a.x -= push; a.vx -= 0.1;
                    b.x += push; b.vx += 0.1;
                    } else {
                    a.x += push; a.vx += 0.1;
                    b.x -= push; b.vx -= 0.1;
                    }
                } else {
                    const push = overlapY / 2;
                    if (a.y < b.y) {
                    a.y -= push; a.vy -= 0.1;
                    b.y += push; b.vy += 0.1;
                    } else {
                    a.y += push; a.vy += 0.1;
                    b.y -= push; b.vy -= 0.1;
                    }
                }
                }
            }
            }
        }

        function resolveObstacleCollisions() {
        const obs = getObstacleBounds();
        const PADDING = 8;

        states.forEach((s) => {
            const overlapX = (s.width / 2 + obs.width / 2 + PADDING) - 
            Math.abs((s.x + s.width / 2) - (obs.x + obs.width / 2));
            const overlapY = (s.height / 2 + obs.height / 2 + PADDING) - 
            Math.abs((s.y + s.height / 2) - (obs.y + obs.height / 2));

            if (overlapX > 0 && overlapY > 0) {
            if (overlapX < overlapY) {
                // Push horizontally
                const push = overlapX;
                if ((s.x + s.width / 2) < (obs.x + obs.width / 2)) {
                s.x -= push;
                s.vx = -Math.abs(s.vx) * 0.8;
                } else {
                s.x += push;
                s.vx = Math.abs(s.vx) * 0.8;
                }
            } else {
                // Push vertically
                const push = overlapY;
                if ((s.y + s.height / 2) < (obs.y + obs.height / 2)) {
                s.y -= push;
                s.vy = -Math.abs(s.vy) * 0.8;
                } else {
                s.y += push;
                s.vy = Math.abs(s.vy) * 0.8;
                }
            }
            }
        });
        }

        let animFrameId;

        function animate() {
            const boardWidth = board.offsetWidth;
            const boardHeight = board.offsetHeight;

            states.forEach((s) => {
            // Move
            s.x += s.vx;
            s.y += s.vy;

            // Dampen velocity (dreamy slow feel)
            s.vx *= 0.999;
            s.vy *= 0.999;

            // Add tiny random drift so they never fully stop
            s.vx += (Math.random() - 0.5) * 0.08;
            s.vy += (Math.random() - 0.5) * 0.08;

            // Clamp max speed
            const maxSpeed = 0.9;
            const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
            if (speed > maxSpeed) {
                s.vx = (s.vx / speed) * maxSpeed;
                s.vy = (s.vy / speed) * maxSpeed;
            }

            // Bounce off board edges
            if (s.x < 0) { s.x = 0; s.vx = Math.abs(s.vx); }
            if (s.y < 0) { s.y = 0; s.vy = Math.abs(s.vy); }
            if (s.x + s.width > boardWidth) { s.x = boardWidth - s.width; s.vx = -Math.abs(s.vx); }
            if (s.y + s.height > boardHeight) { s.y = boardHeight - s.height; s.vy = -Math.abs(s.vy); }

            // Apply to DOM
            s.el.style.left = `${s.x}px`;
            s.el.style.top = `${s.y}px`;
            });

            resolveCollisions();
            resolveObstacleCollisions();
            animFrameId = requestAnimationFrame(animate);
        }

        // Small delay so DOM has fully rendered and getBoundingClientRect is accurate
        const timeout = setTimeout(() => {
            animate();
        }, 100);

        return () => {
            cancelAnimationFrame(animFrameId);
            clearTimeout(timeout);
        };
        }, []);

    return (
        <section className="hero">
        <div className="hero-glow"></div>

        <div className="hero-columns">
            <div className="hero-left">
            <p className="eyebrow">Software Engineer & Game Developer</p>
            <h1 className="hero-name">
                Hi, I'm <em>Ana Paula.</em><br />
                I build things that <br />
                feel as good as they look.
            </h1>
            <p className="hero-tagline">
                I like to build things that feel good to use - with a particular love for{' '}
                <strong>frontend design</strong> and <strong>game development</strong>{' '}- from stealth survival games to polished web experiences. <br />
                Currently finishing my <strong>Bachelor of Software Engineering</strong> at{' '}
                <strong>UNSW</strong>. Based in Adelaide, open to remote and relocation.
            </p>
            <div className="hero-tags">
                <span className="tag gold">Unreal Engine 5</span>
                <span className="tag">React</span>
                <span className="tag">Game Design</span>
                <span className="tag">Frontend</span>
                <span className="tag">Health Tech</span>
            </div>
            </div>

            <div className="hero-right">
            <p className="hero-currently" ref={currentlyRef}>
                <span className="currently-line1">currently exploring:</span>
                <span className="currently-line2">wearable tech</span>
            </p>
            <div className="fridge-board" id="fridge-board" ref={boardRef}>
                {/* Floating image magnets */}
                <div className="magnet image-magnet" style={{top: '45%', left: '10%', rotate: '-1deg'}}>
                <img src="public/hero-projects/tech_hairclip1.jpg" alt="tech hairclip" />
                </div>
                <div className="magnet image-magnet" style={{top: '15%', left: '65%', rotate: '10deg'}}>
                <img src="public/hero-projects/tech_hairclip2.PNG" alt="tech hairclip 2" />
                </div>
                <div className="magnet image-magnet" style={{top: '5%', left: '5%', rotate: '-3deg'}}>
                <img src="public/hero-projects/nft_keychain.PNG" alt="nft keychain" />
                </div>
                <div className="magnet image-magnet" style={{top: '50%', left: '65%', rotate: '3deg'}}>
                <img src="public/hero-projects/magic_eightball.png" alt="magic eight ball" />
                </div>
                <div className="magnet image-magnet" style={{top: '74%', left: '35%', rotate: '-2deg'}}>
                <img src="public/hero-projects/skuba_keychain.PNG" alt="skuba keychain" />
                </div>

                {/* Floating skill bubbles */}
                <div className="magnet bubble-magnet" style={{top: '5%', left: '50%'}}>Fashion Tech</div>
                <div className="magnet bubble-magnet" style={{top: '67%', left: '25%'}}>Arduino</div>
                <div className="magnet bubble-magnet" style={{top: '80%', left: '75%'}}>Human-Computer Interaction</div>
                <div className="magnet bubble-magnet" style={{top: '30%', left: '15%'}}>Embedded Systems</div>
            </div>
            </div>
        </div>
        </section>
    );
}