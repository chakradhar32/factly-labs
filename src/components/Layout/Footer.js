/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { GoMail } from 'react-icons/go'
import { FaPhone } from 'react-icons/fa'
import { jsx } from 'theme-ui';

const Footer = () => {
  return (
    <footer sx={{
      bg: '#1E1E1E',
    }}>
      <div sx={{ display: ['none', null, 'block'] }}>
        <div sx={{
          py: '60px',
          display: 'flex',
          borderBottom: '1px solid #DEDBEE',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          mx: 'auto',
          'h6,h4': {
            color: '#DEDBEE',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '24px',
          },
          'a': {
            color: '#FFFFFF', fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
          }
        }}>
          <div>
            <Link to='#'>
              <img src="/assets/icons/labs2.png" alt="" />
            </Link>
            <h4 sx={{
              mt: '20px', mb: '8px', fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '24px',
              color: '#FFFFFF'
            }}>About Factly</h4>
            <p sx={{
              width: '488px', fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#FFFFFF'
            }}>FACTLY is one of the well known Data Journalism/Public Information portals in India. Each news story on FACTLY is backed by factual evidence/data from official sources that is either available in the public domain or that is collated/gathered/collected using tools such as the Right to Information (RTI).</p>
          </div>
          <div sx={{ display: 'flex', gap: '60px' }}>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h6>Products</h6>
              <a href="#">Dega</a>
              <a href="#">VidCheck</a>
              <a href="#">Counting India</a>
              <a href="#">MandE</a>
              <a href="#">Parlens</a>
              <a href="#">Bindu</a>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h6>Company</h6>
              <a href="/about-us">About</a>
              <a href="/teams">Teams</a>
              <a href="/career">Careers</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>
        <div sx={{ maxWidth: '1280px', mx: 'auto', display: 'flex', justifyContent: 'space-between', py: '48px' }}>
          <p sx={{
            color: '#FFFFFF', color: '#FFFFFF', fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
          }}>© 2014-2021 Factly Media & Research</p>
          <div sx={{ display: 'flex', gap: '16px' }}>
            <Link to='#'>
              <img src="/assets/icons/github.png" alt="" />
            </Link>
            <Link to='#'>
              <img src="/assets/icons/slack.png" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile */}


      <div sx={{ display: ['block', null, 'none'] }}>
        <div sx={{
          maxWidth: '376px',
          mx: 'auto',
          display: "flex",
          flexDirection: "column",
          gap: '4rem',
          a: {
            color: '#FFFFFF'
          },
          py: '60px',
          borderBottom: '1px solid #3E3667',
        }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '308px',
            gap: '20px',
            color: '#fff',
            a: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }
          }}>
            <Link to='/'>
              <img src="/assets/icons/labs2.png" alt="" />
            </Link>
            <p>
              Factly media is an organisation founded
              in 2014 to make public data meaningful.
            </p>
            <a href="">
              <GoMail /> info@factlymedia.com
            </a>
            <a href="tel:+91 1234567890">
              <FaPhone /> +91 1234567890
            </a>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#FFFFFF',
            a: {
              mt: '24px',
              '&:hover': { color: '#3E3667' }
            }
          }}>
            <Link to='/featured'>Our Work</Link>
            <Link to='/teams'>Company</Link>
            <Link to=''>Impact</Link>
            <Link to=''>Accolades</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </div>
        <p sx={{
          fontFamily: 'inter',
          fontSize: '14px',
          lineHeight: '22px',
          color: '#fff',
          textAlign: 'center',
          pt: '2rem',
          pb: '4rem',
          maxWidth: '376px',
          mx: 'auto'
        }}>
          © Factly Media & Research, 2022. All rights reserved.
        </p>
      </div>

    </footer >
  )
}

export default Footer