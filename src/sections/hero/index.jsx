import { Button } from '../../components';
import { onScrollToSection } from '../../utils/scroll';
import './index.scss';

export const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className='container hero__content'>
        <h1 className="h1">
          Re-discover cloud computing with us.
          <br />
          We will help you shape your cloud.
        </h1>

        <div className='hero__buttons'>
          <Button variant="secondary" className='hero__button' onClick={() => onScrollToSection('our-service')}>
            Learn more
          </Button>

          <button className='hero__circle-wrapper' onClick={() => onScrollToSection('our-service')}>
            <div className='hero__circle'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M6.30823 10.7052L6.30823 0.358983L8.00823 0.358983L8.00823 10.7052L12.5676 6.14578L13.7695 7.34768L7.15823 13.959L0.546932 7.34768L1.74883 6.14578L6.30823 10.7052Z" fill="#F7F6F9"/>
                </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}