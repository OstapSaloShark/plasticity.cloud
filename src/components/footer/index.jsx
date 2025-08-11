import { Logo } from '../logo';
import { NavLinks } from '../navLinks';
import './index.scss';

import { GithubSvg, LinkedinSvg } from '../svg';
import { onScrollToSection } from '../../utils/scroll';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__content'>
        <Logo colorLeft='#f7f6f9' onClick={() => onScrollToSection('hero')} />
        <NavLinks />

        <div className='footer__socials'>
          <a target='_blank' href="https://github.com/plasticity-cloud/" rel="noopener noreferrer">
            <GithubSvg />
          </a>
          <a href="/">
            <LinkedinSvg />
          </a>
        </div>
      </div>
    </footer>
  )
}