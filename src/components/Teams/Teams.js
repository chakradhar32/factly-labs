/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TeamCard from './TeamCard'


const Teams = ({ teams }) => {

  return (
    <section>
      <div sx={{
        maxWidth: '1164px',
        mx: 'auto',
        display: 'grid',
        px: ['42px', null, '0px'],
        py: ['60px', null, '100px'],
        gridTemplateColumns: 'repeat(auto-fit, minmax(337px, 1fr))',
        gridGap: '76px'
      }}>
        {teams.map((team) => (
          <TeamCard data={team} />
        ))}
      </div>
    </section>
  )
}

export default Teams