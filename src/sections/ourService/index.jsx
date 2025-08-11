import './index.scss';

export const OurServiceSection = () => {
  return (
    <section className='our-service' id='our-service'>
      <ul className='container our-service__list'>
        <li className='our-service__item'>
          <div className='our-service__first'>
            <h1 className='h1'>Our Service</h1>
          </div>

          <div className='our-service__second'>
            <h5 className='h5'>Unique approach that we bring to the market, branded cloud counselling, gives you opportunity to breathe with fresh air, when it comes to cloud computing.</h5>
          </div>
        </li>

        <li className='our-service__item'>
          <div className='our-service__third'>
            <h5 className='h5'>
              If you are dealing with cloud exit or cloud entry, we are with you on this journey and share out expertise not only using core services, but bridging them with solutions delivered by Clouds' Partner ecosystem, so that you can take advantage of hybrid cloud approach.
            </h5>
          </div>

          <div className='our-service__fourth'>
            <h1 className='h1'>We consider human factor first, then technology.</h1>
          </div>
        </li>
      </ul>
    </section>
  );
};