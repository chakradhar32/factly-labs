/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SectionHeader from './SectionHeader'

const Header = ({ title, description }) => {
  return (
    <header sx={{ bg: '#3E3667', }}>
      <SectionHeader
        title={title}
        description={description}
      />
    </header>
  )
}

export default Header