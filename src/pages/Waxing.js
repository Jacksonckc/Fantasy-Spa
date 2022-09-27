import { RoundButtonToCal } from '../particles';
const Waxing = () => {
  return (
    <div className='service'>
      <h1>Waxing Services</h1>
      <section className='service-rows'>
        <section className='service-row-1'>
          <p className='service-row-desc'>
            Say goodbye to stubborn eyebrow hairs, and say hello to new
            structured brows!
          </p>
          <RoundButtonToCal
            path='eyebrow_wax.webp'
            caption='Eyebrow Wax $20'
            route='https://calendly.com/jackson858216047/60min'
          />
        </section>
        <section className='service-row-2'>
          <RoundButtonToCal
            path='leg_wax.webp'
            caption='Leg Wax $30'
            route='https://calendly.com/jackson858216047/60min'
          />
          <p className='service-row-desc'>
            Get ready to have your legs silky smooth and hair free for 2 weeks!
          </p>
        </section>
        <section className='service-row-3'>
          <p className='service-row-desc'>
            Avoid the razor bumps and cuts on your underarms, and feel
            confident!
          </p>
          <RoundButtonToCal
            path='underarm_wax.webp'
            caption='Underarm Wax $15'
            route='https://calendly.com/jackson858216047/60min'
          />
        </section>
      </section>
    </div>
  );
};

export default Waxing;
