/** @jsx jsx */
import { jsx } from 'theme-ui';
import Phone from '../../../static/assets/icons/Phone.svg'
import Facebook from '../../../static/assets/icons/facebook.svg'
import Instagram from '../../../static/assets/icons/instagram.svg'
import Email from '../../../static/assets/icons/Email.svg'
import Location from '../../../static/assets/icons/Location.svg'
import Linkedin from '../../../static/assets/icons/linkedin.svg'
import Twitter from '../../../static/assets/icons/twitter.svg'


const ContactForm = () => {
  return (
    <section
      sx={{
        display: 'flex',
        gap: '2rem',
        maxWidth: '1036px',
        margin: 'auto',
        padding: ['1rem', null, null, '2rem'],
        my: '3rem',
        flexWrap: 'wrap',
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '24px',
          flex: '1 0 50%',
          maxWidth: '50%',
          flexWrap: 'wrap',
          h4: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '20px',
            color: '#5B5B5B'
          }
        }}
      >
        <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '44px',
            color: '#3E3667'
          }}>
            Get in Touch
          </h2>
          <p>
            We’d love to hear from you. Let’s fill out this form.
          </p>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Phone} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column', a: { color: '#5B5B5B' } }}>
            <a href="/">+91 7675468964</a>
            <a href="/">+91 9675468964</a>
          </div>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Email} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <h4>factly@lorem.com</h4>
          </div>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Location} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <h4>Lorem Ipsum, Dolor Ultra
              Hyderabad</h4>
          </div>
        </div>

        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: ['center', null, null, 'flex-start'],

            variant: 'text.lg',
            gap: '2rem',
            py: '1rem',
            a: {
              color: '#000',
              '&:hover': { color: '#fff' },
            },
          }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Facebook} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Linkedin} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Twitter} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      {/* contact form */}




      <div>
        <form sx={{
          maxWidth: '50%', flex: '1 0 50%', px: '68px',
          py: '48px', width: '100%', maxWidth: '550px'
        }} action={''} method="POST">
          <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                'input, textarea, select': {
                  border: '1px solid #ccc',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  display: 'flex'
                },
              }}
            >
              <label htmlFor="name">
                Name
                <input id="name" type="text" name="name" />
              </label>
              <label htmlFor="name">
                Email
                <input id="email" type="email" name="email" />
              </label>
              <label htmlFor="message">
                Message
                <input id="message" type="text" name="message" />
              </label>
              <button sx={{
                bg: '#3E3667',
                color: '#E6E3D9',
                border: 'none',
                borderRadius: '4px',
                alignSelf: 'flex-start',
                p: '18px 48px',
                fontFamily: 'Inter', fontWeight: '700', fontSize: '20px'
              }}>
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export default ContactForm;