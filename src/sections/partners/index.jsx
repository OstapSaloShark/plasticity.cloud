import './index.scss';

export const PartnersSection = () => {
  return (
    <section className='container partners' id='partners'>
      <div className='partners__first'>
        <h1 className='h1'>
          We collaborate with
        </h1>
      </div>

      <ul className='partners__row'>
        <li className='partners__other partners__other--first'>
          <h1 className='h1'>
            Shark Software
          </h1>

          <h5 className='h5'>
            If you are looking for expertise in having your brand
            noticed, in the AI generated boringness, they are the
            experts in their domain, giving human touch to the content you share within your organization or to the public.
            <br />
            <br />
            Full stack development is their daily bread and this website design is solely thanks to them.
          </h5>
        </li>

        <li className='partners__other partners__other--second'>
          <h1 className='h1'>
            Amazon
          </h1>

          <h5 className='h5'>
            We do work with some brilliant minds behind your core services, either current employees or ex AWS employees.
          </h5>
        </li>
      </ul>

      <ul className='partners__row partners__row--second'>
        <li className='partners__other partners__other--third'>
          <h1 className='h1'>
            Redwerk
          </h1>

          <h5 className='h5'>
            If you are looking for moving into Web3 (dApps) and Government solutions vast ecosystem, they got you covered.
          </h5>
        </li>

        <li className='partners__other partners__other--fourth'>
          <h1 className='h1'>
            MemVerge
          </h1>

          <h5 className='h5'>
            Working with DevRel and GTM Teams and their AWS customers, we are using their products daily, to ship synthetic data generators.
            <br />
            <br />
            Their unique line of tools aka SpotSurfer, allows you to iterate faster, by transparently migrating your workloads between Spot instances, no matter if that's Kubernetes or standard VM/baremetal EC2. 
          </h5>
        </li>
      </ul>
    </section>
  );
};
