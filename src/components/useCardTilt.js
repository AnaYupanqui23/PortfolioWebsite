import { useEffect } from 'react';

export function useCardTilt(selector) {
    useEffect(() => {
        const cards = document.querySelectorAll(selector);
        
        cards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max tilt of 6 degrees — subtle
            const tiltX = ((y - centerY) / centerY) * -20;
            const tiltY = ((x - centerX) / centerX) * 20;
            
            card.style.transform = `translateY(-6px) scale(1.01) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          });
          
          card.addEventListener('mouseleave', () => {
            // Smoothly reset on mouse leave
            card.style.transform = '';
          });
        });
    
        return () => {
          cards.forEach(card => {
            card.replaceWith(card.cloneNode(true));
          });
        };
      }, []);
}