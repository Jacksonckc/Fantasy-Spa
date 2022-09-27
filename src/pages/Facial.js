import { RoundButtonToCal } from '../particles';
const Facial = () => {
  return (
    <div className='facial'>
      <h1>Facials</h1>
      <section className='facial-rows'>
        <section className='facial-row-1'>
          <p className='facial-row-desc'>
            Get rid of those pesky blackheads and white heads! Time to feel
            smooth skin again!
          </p>
          <RoundButtonToCal
            path='facial.webp'
            caption='Extractions $35'
            route='https://calendly.com/jackson858216047/15min'
          />
        </section>
        <section className='facial-row-2'>
          <RoundButtonToCal
            path='refreshing_facial.webp'
            caption='Refreshing Facial $30'
            route='https://calendly.com/jackson858216047/15min'
          />
          <p className='facial-row-desc'>
            Give your skin the glow you desire! By removing the dead skin, your
            face will be shinning in no time!
          </p>
        </section>
        <section className='facial-row-3'>
          <p className='facial-row-desc'>
            This Dermalogica facial is designed the slougth off dead skin and
            leave your face smooth and clean.
          </p>
          <RoundButtonToCal
            path='multivitamin_facial.webp'
            caption='Multivitamin Facial $40'
            route='https://calendly.com/jackson858216047/15min'
          />
        </section>
      </section>
    </div>
  );
};

export default Facial;
