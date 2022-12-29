/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Data = () => {
  return (
    <section sx={{ bg: '#DEDBEE', }}>
      <div sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        px: '80px',
        py: '60px',
        textAlign: 'center',
        maxWidth: '1440px',
        mx: 'auto',
        textAlign: 'center',
        p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          color: '#1E1E1E'
        }
      }}>
        <h3 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '32px',
          color: '#3E3667'
        }}>Advocating Open Data</h3>
        <p>Factly believes that for better public engagement with government data, the supply side also has to be strengthened. Factly actively advocates ‘Open Data’ policy to governments and agencies that house large amounts of public information. Factly collaborates and provides services to governments and institutions to release data to the public domain.</p>
        <p>Besides these, Factly engages with various stakeholders from across the ‘Open Data’ spectrum to build successful case studies & use cases. Factly also conducts training sessions on accessing, understanding & analysing public data to journalists, public policy enthusiasts, NGOs etc.</p>
      </div>
    </section>
  )
}

export default Data