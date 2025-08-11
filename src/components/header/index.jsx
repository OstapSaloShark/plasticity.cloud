import { useState } from 'react';
import { Button } from '../button';
import { CircleArrow } from '../circleArrow';
import { Logo } from '../logo';
import { NavLinks } from '../navLinks';

import './index.scss';
import { onScrollToSection } from '../../utils/scroll';

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(prev => !prev);
  };

  const onClickToContactUs = () => {
    onScrollToSection('contact-us');
    toggleBurger();
  };

  return (
    <header className='header'>
      <div className='container header__content'>
        <Logo onClick={() => onScrollToSection('hero')} />

        <div className='header__right'>
          <NavLinks colorText='#2e3139' />

          <Button variant='primary' onClick={() => onScrollToSection('contact-us')}>
            <p>Contact Us</p>
            <CircleArrow />
          </Button>
        </div>

        <div 
          className={`header__burger ${burgerOpen ? 'header__burger--open' : ''}`}
          onClick={toggleBurger}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleBurger(); }}
        >
          <span className='header__burger__line header__burger__line--top' />
          <span className='header__burger__line header__burger__line--middle' />
          <span className='header__burger__line header__burger__line--bottom' />
        </div>
      </div>

      <div className={`header__mobile-menu ${burgerOpen ? 'header__mobile-menu--open' : ''}`}>
        <NavLinks colorText='#2e3139' vertical onClickToItem={toggleBurger} />
        
        <Button variant="primary" onClick={onClickToContactUs}>
          <p>Contact Us</p>
          <CircleArrow />
        </Button>
      </div>
    </header>
  );
};