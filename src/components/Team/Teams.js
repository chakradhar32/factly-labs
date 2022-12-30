/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Team from './Team'


const Teams = () => {

  const teams = [
    {
      image: "/assets/images/team-image.png",
      title: "Organization Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/details"
    },
    {
      image: "/assets/images/team-image.png",
      title: "Newsroom Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/team-image.png",
      title: "Fact-check Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/team-image.png",
      title: "Research Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/team-image.png",
      title: "Production Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/team-image.png",
      title: "Technology Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
  ]
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
          <Team data={{ ...team }} />
        ))}
      </div>
    </section>
  )
}

export default Teams