import { useEffect } from 'react';

export function useCardHover(selector) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px) scale(1.03)';
        card.style.boxShadow = '0 12px 32px rgba(58, 48, 40, 0.12), 0 4px 12px rgba(58, 48, 40, 0.08)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });

    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);
}