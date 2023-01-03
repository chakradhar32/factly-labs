/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

const Form = () => {
  return (
    <section>
      <div sx={{
        display: ['none', null, 'flex'],
        maxWidth: '590px',
        my: '80px',
        mx: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div sx={{
          mb: '60px',
          textAlign: 'center'
        }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '36px',
            color: '#3E3667'

          }}>Get In Touch</h2>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '20px',
            color: '#1E1E1E'
          }}
          >We’d love to hear from you. Let’s fill out this form.</p>
        </div>
        <form sx={{
          'input, textarea': {
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '0.5rem',
          },
        }}>
          <div sx={{ display: "flex", gap: '24px' }}>
            <div sx={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
              <label for="name">Name</label>
              <input type="password" id="name" />
            </div>
            <div sx={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div sx={{ display: "flex", flexDirection: 'column' }}>
            <label sx={{ my: '10px' }} for="message">Message</label>
            <input type="text" id="message" />
          </div>
          <button sx={{
            bg: '#3E3667',
            color: '#E6E3D9',
            px: '42px',
            py: '12px',
            borderRadius: '4px',
            mt: '24px'
          }}>
            Submit
          </button>
        </form>
      </div>



      {/* mobile */}

      <div sx={{
        maxWidth: '376px',
        mx: 'auto',
        my: '3rem',
        display: ['block', null, 'none',]
      }}>
        <div>
          <h1 sx={{
            color: '#3E3667', fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '44px',
          }}>
            Get In Touch
          </h1>
          <p sx={{
            color: '#3E3667', fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '30px',
            mt: '1.5rem'
          }}>
            We’d love to hear from you. Let’s fill out this form.
          </p>
        </div>
        <div
          sx={{
            width: '100%',
            position: "relative",
            label: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',

            },
          }}
        >
          <form sx={{
            position: 'none', mt: '2rem', bottom: '0', width: '100%', maxWidth: '550px'
          }} action={''} method="POST">
            <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                  'input, textarea, select': {
                    border: '1px solid #3E3667',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    background: 'none',
                  },
                  label: {
                    color: '#3E3667'
                  }
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
                  mt: '1rem',
                  bg: '#3E3667',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  alignSelf: 'flex-start',
                  p: '18px 48px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  fontSize: '20px'
                }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>




    </section>

  );
};

export default Form;