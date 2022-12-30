/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import SectionHeader from '../Common/SectionHeader'

const WhatWeDo = () => {
  return (
    <section>
      <div sx={{ maxWidth: '1066px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: '108px', py: '100px' }}>

        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '36px',
            color: '#3E3667',
            mb: '12px'
          }}>What We Do</h2>
          <p>Factly’s written and visual stories layout facts with evidence and help separate the wheat from the chaff in times of hyper-connectivity and constant information bombardment. The content aims to simplify public data & information that might otherwise be in complex forms. The fact-checks debunk viral misinformation and lay bare facts on the claims made by influencers.</p>
        </div>
        <div>
          <div sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            gridGap: '48px',
            h1: {
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '28px',
              color: '#3E3667'
            },
            p: {
              fontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '16px',
              color: '#1E1E1E'
            },
            a: {
              color: '#1E1E1E', fontWeight: '700', fontSize: '16px'
            }
          }}>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src="/assets/icons/icon.svg" alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={"/assets/icons/icon.svg"} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={"/assets/icons/icon.svg"} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src="/assets/icons/icon.svg" alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={"/assets/icons/icon.svg"} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', alignItems: 'center' }}>
              <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <img src="/assets/icons/career.png" alt="" />
                <h1>Dega</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={"/assets/icons/icon.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default WhatWeDo