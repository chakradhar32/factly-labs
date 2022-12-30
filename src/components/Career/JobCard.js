/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import ArrowRight from '../../../static/assets/icons/arrow-right-alt.svg'


const JobCard = ({ data }) => {
  const { title, link } = data
  return (
    <div>
      <div sx={{
        bg: "#F4F0EC", display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        mt: '24px',
        p: '24px 48px',
        alignItems: 'center'
      }}>
        <h4 sx={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '30px',
          color: '#5B5B5B'
        }}>{title}</h4>

        <a href={link} sx={{
          borderRadius: '4px',
          gap: '10px',
          p: '12px 22px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '30px',
          color: '#FFFFFF',
          bg: '#3E3667'
        }}>Apply Now
          <img src={ArrowRight} alt="" />
        </a>

      </div>
    </div>
  )
}

export default JobCard