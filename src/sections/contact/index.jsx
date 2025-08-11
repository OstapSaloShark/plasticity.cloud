import { CircleArrow } from '../../components';
import { Button } from '../../components/button';
import { GithubSvg } from '../../components/svg/githubSvg';
import './index.scss';

export const ContactSection = () => {
  return (
    <section className='container contact' id='contact-us'>
      <div className='contact__left'>
        <h1 className='h1'>Contact</h1>
      </div>

      <div className='contact__right'>
        <div className='contact__right__content'>
          <h4 className='h4'>
            All enquiries are accepted using official email address:
          </h4>

          <a href='mailto:support@plasticity.cloud' className='h2 contact__email'>
            support@plasticity.cloud
          </a>
        </div>

        <div className='contact__right__content'>
          <h4 className='h4'>
            Feel free to reach us also on github:
          </h4>
          <a 
            href="https://github.com/plasticity-cloud/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ width: 'min-content' }}
          >
            <Button variant="primary">
              <GithubSvg />
              <CircleArrow />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}