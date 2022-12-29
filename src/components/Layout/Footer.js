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
      <div sx={{
        py: '60px',
        display: 'flex',
        borderBottom: '1px solid #FFFFFF',
        justifyContent: 'space-between',
        maxWidth: '1280px',
        mx: 'auto',
        'h6,h4': {
          color: '#DEDBEE', fontFamily: 'Inter',
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
            <a href="#">About</a>
            <a href="#">Teams</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
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
    </footer >
  )
}

export default Footer