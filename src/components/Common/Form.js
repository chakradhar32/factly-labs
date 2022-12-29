/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';

const Form = () => {
  return (
    // <section sx={{ bg: '#688678', px: '100px', py: '60px', mt: '200px', position: 'relative' }}>
    //   <div sx={{ display: 'flex', maxWidth: '1080px', mx: 'auto', }}>
    //     <div sx={{
    //       maxWidth: '45%',
    //       flex: '1 0 45%'
    //     }} >
    //       <div>
    //         <h1 sx={{
    //           color: '#F8F8F8', fontFamily: 'Montserrat',
    //           fontWeight: '600',
    //           fontSize: '60px',
    //           lineHeight: '82px'
    //         }}>
    //           We are here to help you know the facts.
    //         </h1>
    //       </div>
    //     </div>
    //     <div
    //       sx={{
    //         // bg: '#F1F1F1',
    //         p: ['1rem', null, null, '2rem'],
    //         // maxWidth: '50%',
    //         // flex: '1 0 50%',
    //         width: '100%',
    //         position: "relative",
    //         label: {
    //           display: 'flex',
    //           flexDirection: 'column',
    //           gap: '0.25rem',

    //         },
    //       }}
    //     >
    //       <form sx={{
    //         position: 'absolute', bottom: '0', bg: '#F6F6F6', px: '68px',
    //         py: '48px', width: '100%', maxWidth: '550px', boxShadow: '5px 32px 25px rgba(104, 134, 119, 0.23)'
    //       }} action={''} method="POST">
    //         <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    //           <div
    //             sx={{
    //               display: 'flex',
    //               flexDirection: 'column',
    //               gap: '1rem',
    //               width: '100%',
    //               'input, textarea, select': {
    //                 border: '1px solid #ccc',
    //                 padding: '1rem',
    //                 borderRadius: '0.5rem',
    //               },
    //             }}
    //           >
    //             <label htmlFor="name">
    //               Name
    //               <input id="name" type="text" name="name" />
    //             </label>
    //             <label htmlFor="name">
    //               Email
    //               <input id="email" type="email" name="email" />
    //             </label>
    //             <label htmlFor="message">
    //               Message
    //               <input id="message" type="text" name="message" />
    //             </label>
    //             <button sx={{
    //               bg: '#CE212B',
    //               color: '#E6E3D9',
    //               border: 'none',
    //               borderRadius: '4px',
    //               alignSelf: 'flex-start',
    //               p: '18px 48px',
    //               fontFamily: 'Inter', fontWeight: '700', fontSize: '20px'
    //             }}>
    //               Submit
    //             </button>
    //           </div>

    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>


    <section sx={{}} >
      <div sx={{
        display: 'flex',
        maxWidth: '1440px',
        mx: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div sx={{ my: '60px', maxWidth: '768px', textAlign: 'center' }}>
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
          maxWidth: '590px',
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
            {/* <input type="text" id="message" /> */}
            <textarea rows={4} cols={4}></textarea>
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