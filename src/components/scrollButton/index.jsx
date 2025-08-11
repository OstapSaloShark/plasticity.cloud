import { useEffect, useState } from 'react';
import { onScrollToSection } from '../../utils/scroll';
import './index.scss';

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', onScroll);

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <button
      className='scroll-button'
      onClick={() => onScrollToSection('hero')}
      style={{
        opacity: isVisible ? 1 : 0,
        cursor: isVisible ? 'pointer' : 'inherit'
      }}
      disabled={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.5428 5.742V24H10.4572V5.742L2.18154 13.788L0 11.667L12 0L24 11.667L21.8185 13.788L13.5428 5.742Z"
          fill="black"
        />
      </svg>
    </button>
  );
};