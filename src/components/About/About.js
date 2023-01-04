/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'


const About = () => {
  return (
    <section sx={{
    }}>
      <div sx={{
        maxWidth: '1180px',
        mx: 'auto',
        py: ['40px', null, '100px'],
        display: 'flex',
        flexDirection: 'column',
        gap: ['40px', null, '80px',],
        p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: ['16px', null, '20px'],
          lineHeight: '30px'
        }
      }}>
        <div sx={{
          px: ['32px', null, '0px'],
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
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '32px',
          h1: { fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat', },
          p: { fontFamily: 'Inter', fontWeight: '400', fontSize: '16px' }
        }}>
          <div sx={{
            maxWidth: ['1 0 100%', null, '1 0 calc(65% - 16px)'],
            flex: ['1 0 100%', null, '1 0 calc(65% - 16px)'],
            display: 'flex',
            flexDirection: 'column',
            px: ['48px', null, '0px'],
            order: [1, null, 0],
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
              padding: '44px 20px',
              color: '#3E3667',
              width: '100%'
            }}>
              <img src="/assets/images/about2.png" alt="" />
              <div>
                <h1>Mission</h1>
                <p>Factly Labs strives on developing and managing various applications that will increase access to public data and information by making it easy, interactive and intuitive.</p>
              </div>
            </div>
            <div sx={{
              display: 'flex',
              color: '#3E3667',
              gap: '28px',
              bg: '#DEDBEE',
              alignItems: 'center',
              padding: '44px 20px',
              width: '100%'
            }}>
              <img src="/assets/images/about2.png" alt="" />
              <div>
                <h1>Vision</h1>
                <p>Factly Labs will strive to democratize journalism technology.</p>
              </div>
            </div>
          </div>
          <div sx={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: ['1 0 100%', null, '1 0 calc(35% - 16px)'],
            flex: ['1 0 100%', null, '1 0 calc(35% - 16px)'],
          }}>
            <img src="/assets/images/factly-img.png" alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default About