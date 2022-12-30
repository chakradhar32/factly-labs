/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

const Form = () => {
  return (
    <section>
      <div sx={{
        display: 'flex',
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
    </section>

  );
};

export default Form;