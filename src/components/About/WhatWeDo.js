/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import arrowRight from '../../../static/assets/icons/arrow-right.svg'
import SectionHeader from '../Common/SectionHeader'

const WhatWeDo = () => {
  return (
    <section>
      <div sx={{ maxWidth: '1066px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: ['32px', null, null, '108px'], pb: '100px', pt: '60px' }}>
        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: ['28px', null, null, '0px'],
        }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '36px',
            color: '#3E3667',
            mb: '12px'
          }}>What We Do</h2>
          <p sx={{ fontSize: ['16px', null, '20px'], }}>Factly’s written and visual stories layout facts with evidence and help separate the wheat from the chaff in times of hyper-connectivity and constant information bombardment. The content aims to simplify public data & information that might otherwise be in complex forms. The fact-checks debunk viral misinformation and lay bare facts on the claims made by influencers.</p>
        </div>
        <div>
          <div sx={{
            padding: ['28px', null, null, '0px'],
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(316px, 1fr))',
            gridGap: '48px',
            h1: {
              fontSize: '24px',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              color: '#3E3667'
            },
            p: {
              fontFamily: 'Inter',
              fontWeight: '400',
              variant: 'text.sm',
              color: '#1E1E1E',
            },
            a: {
              color: '#1E1E1E', fontWeight: '700', variant: 'text.sm',
            }
          }}>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center',
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo