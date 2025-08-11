import Solutions1 from '../../assets/solutions1.jpg'
import Solutions2 from '../../assets/solutions2.jpg'
import Solutions3 from '../../assets/solutions3.jpg'

import './index.scss';

export const InHouseSolutionsSection = () => {
  return (
    <section className="in-house-solutions" id='solutions'>
      <ul className="container in-house-solutions__list">
        <li className="in-house-solutions__item">
          <img
            className="in-house-solutions__item__img"
            src={Solutions1}
            alt="solutions-1"
          />

          <div className="in-house-solutions__item__right">
            <div className="in-house-solutions__item__title-container">
              <h1 className="h1">In-house built Solutions</h1>
            </div>

            <div className="in-house-solutions__item__subtitle-container in-house-solutions__item__subtitle-container--first">
              <h2 className="h2">AWS Lambda ActionCore</h2>
            </div>

            <h5 className='h5'>
              If your team feels solutions like AWS Lambda onboarding is no-go,
              this brand-new framework gives you the same look and feel as AWS
              Fargate and reusability of tools your engineering teams are familiar with.
            </h5>
            <br />
            <br />
            <br />
            <h4 className='h4'>
              After closed beta, general availability release is scheduled for
              end of May 2025, powered by brand new Open-Source Fair Trade
              Developer licensing.
            </h4>
            <br />
            <br />
            <br />
            <h5 className='h5'>
              It is your engineer who pays a minimal fee for a whole year — to give you
              an idea, the cost of 1 tasty takeaway.
            </h5>
            <br />
            <br />
            <br />
            <h5 className='h5'>
              No matter if one is starting their cloud journey or is an AWS
              employee — the same license for development and production applies.
            </h5>

            <div className="in-house-solutions__item__grey-block in-house-solutions__item__grey-block--first">
              <h4 className="h4">
                No volume licensing locking, no CPU/TPU/GPU/FPGA/ASIC core count.
              </h4>
              <h5 className="h5">What matters is your team's productivity.</h5>
              <br />
              <br />
              <h4 className="h4">Why such license?</h4>
              <h5 className="h5">Because we believe in fair trade.</h5>
              <br />
              <br />
              <h4 className="h4">What you receive in standard package?</h4>
              <h5 className='h5'>
                Binary lambda layer is shared, along with source code hosted on github for auditing.
              </h5>
            </div>
          </div>
        </li>

        <li className="in-house-solutions__item">
          <div className="in-house-solutions__item__left">
            <div className="in-house-solutions__item__subtitle-container in-house-solutions__item__subtitle-container--second">
              <h2 className="h2">AWS SDK Optimized Libraries</h2>
            </div>

            <h4 className="h4" style={{ marginBottom: '32px' }}>
              We are planning to release optimized libraries to the public at end of June 2025,
            </h4>

            <h5 className="h5">
              so that you could benefit from slim and blazing fast io_uring support across different platforms, to take advantage of full Amazon Linux 2023 potential.
            </h5>
          </div>

          <img
            className="in-house-solutions__item__img"
            src={Solutions2}
            alt="solutions-2"
          />
            
        </li>

        <li className="in-house-solutions__item">
          <img
            className="in-house-solutions__item__img"
            src={Solutions3}
            alt="solutions-3"
          />

          <div className="in-house-solutions__item__right in-house-solutions__item__right--second">
            <div className="in-house-solutions__item__subtitle-container in-house-solutions__item__subtitle-container--third">
              <h2 className="h2">GraalVM onboarding lab</h2>
            </div>

            <h4 className='h4'>Cloud doesn't have to be boring.</h4>
            <br />
            <br />
            <h4 className='h4'>
              Communicating between languages doesn't have to be difficult.
            </h4>
            <br />
            <br />
            <h5 className='h5'>
              We use GraalVM daily to get our products delivered faster.
            </h5>
            <br />
            <br />
            <h5 className='h5'>
              We want you to have same opportunity.
            </h5>

            <div className="in-house-solutions__item__grey-block in-house-solutions__item__grey-block--last">
              <h4 className="h4">
                Not limited to Java only
              </h4>

              <h5 className="h5">
                We walk you through our integrations
                <br />
                and give interactive hands-on, that you can integrate with your offerings.
              </h5>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};