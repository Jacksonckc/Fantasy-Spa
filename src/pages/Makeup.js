import { RoundButtonToCal } from '../particles';
const Makeup = () => {
  return (
    <div className='service'>
      <h1>Makeup</h1>
      <section className='service-rows'>
        <section className='service-row1'>
          <p className='service-row-desc'>
            Learn the makeup skills to apply makeup, and have the desired look
            you want every time! This is a lesson as well as a service!
          </p>
          <RoundButtonToCal
            path='full_face_makeup.webp'
            caption='Full Face Makeup $40'
            route='https://calendly.com/jackson858216047/60min'
          />
        </section>
        <section className='service-row-2'>
          <RoundButtonToCal
            path='glam_makeup.webp'
            caption='Glam Makeup: lashes included $60'
            route='https://calendly.com/jackson858216047/60min'
          />
          <p className='service-row-desc'>
            Ready to go out on the twon tonight? Let me help you out! Full glam
            makeup is included with lashes of your choosing!
          </p>
        </section>
      </section>
    </div>
  );
};

export default Makeup;
