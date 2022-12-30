/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'

const Header = () => {
  return (
    <section sx={{
      py: ['60px', null, '100px'], px: ['32px', null, '0px']
    }}>
      <div sx={{
        backgroundImage: [`url('/assets/images/header-bg.png')`, null, 'none'],
        backgroundRepeat: 'no-repeat',
        maxWidth: '1190px',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div sx={{
          maxWidth: ['1 0 100%', null, '1 0 calc(50% - 12px)'],
          flex: ['1 0 100%', null, '1 0 calc(50% - 12px)'],
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h1 sx={{
            fontFamily: 'poppins',
            fontWeight: '500',
            fontSize: '68px',
            color: '#1E1E1E',
            lineHeight: '81px'
          }}>Making Data Meaningful</h1>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '20px',
            color: '#1E1E1E',
            lineHeight: '30px'
          }}>Embracing data, technology and journalism to increase public awareness and empower them to make right decisions.</p>
          <Link
            to="/"
            sx={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              bg: '#3E3667',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              filter: 'drop-shadow(3px 4px 26px rgba(62, 54, 103, 0.36))',
              p: '18px 32px',
              fontFamily: 'Inter', fontWeight: '700', fontSize: '20px'
            }}>
            Learn more
          </Link>
        </div>
        <div sx={{
          display: ['none', null, 'block'],
          maxWidth: 'calc(50% - 12px)',
          flex: '1 0 calc(50% - 12px)', mx: 'auto'
        }}>
          <img src="/assets/images/header.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Header