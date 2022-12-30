/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'


const About = () => {
  return (
    <section sx={{
    }}>
      <div sx={{
        maxWidth: '1180px', mx: 'auto', py: '100px', display: 'flex', flexDirection: 'column', gap: '80px', p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px'
        }
      }}>
        <div sx={{
          textAlign: 'center',
        }}>
          <h1 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '44px',
            mb: '20px',
            color: '#3E3667'
          }}>About Factly</h1>
          <p>Factly Labs is the technology wing at Factly that works on various solutions for Journalism Tech. Factly Labs was started to primarily address the technolgy needs at Factly, but we quickly realized that the solutions developed for Factly addressed similar problems across other media organisations. </p>
        </div>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '32px',
          h1: { fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat', },
          p: { fontFamily: 'Inter', fontWeight: '400', fontSize: '16px' }
        }}>
          <div sx={{
            maxWidth: 'calc(65% - 16px)',
            flex: '1 0 calc(65% - 16px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            p: { fontSize: '16px' },
            img: { height: '77px', width: '77px' },
          }}>
            <div sx={{
              display: 'flex',
              gap: '28px', bg: '#DEDBEE',
              alignItems: 'center',
              width: '676px', padding: '44px 20px',
              color: '#3E3667'
            }}>
              <img src="/assets/icons/career.png" alt="" />
              <div>
                <h1>Mission</h1>
                <p>Factly Labs strives on developing and managing various applications that will increase access to public data and information by making it easy, interactive and intuitive.</p>
              </div>
            </div>
            <div sx={{ display: 'flex', color: '#3E3667', gap: '28px', bg: '#DEDBEE', alignItems: 'center', width: '676px', padding: '44px 20px' }}>
              <img src="/assets/icons/career.png" alt="" />
              <div>
                <h1>Vision</h1>
                <p>Factly Labs will strive to democratize journalism technology.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/factly-img.png" alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default About