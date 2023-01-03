/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const SectionHeader = ({ title, description }) => {
  return (
    <>
      <div sx={{
        maxWidth: '768px',
        mx: 'auto',
        py: ['60px', null, '82px'],
        px: ['28px', null, '0px'],
        bg: '#3E3667'
      }}>
        <h1 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: ['32px', null, '36px'],
          lineHeight: '44px',
          textAlign: 'center',
          color: '#FFFFFF',
          mb: '20px'
        }}>{title}</h1>
        <p sx={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: ['16px', null, '20px'],
          textAlign: 'center',
          color: '#F1F1F1'
        }}>{description}</p>

      </div>

    </>
  )
}

export default SectionHeader