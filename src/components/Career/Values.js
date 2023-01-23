/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Value from './Value'


const Values = () => {

  const values = [
    {
      image: '/assets/icons/career.png',
      title: 'Transparency',
      backgroundColor: '#F9F3DD',
      description: `Whether we're developing software or solving a business problem, we all have access to the information and materials necessary for doing our best work. And when these materials are accessible, we can build upon each other's ideas and discoveries. We can make more effective decisions and understand how decisions affect us.`,
    },
    {
      image: '/assets/icons/career.png',
      title: 'Collaboration',
      backgroundColor: '#EBF9DD',
      description: `Whether we're developing software or solving a business problem, we all have access to the information and materials necessary for doing our best work. And when these materials are accessible, we can build upon each other's ideas and discoveries. We can make more effective decisions and understand how decisions affect us.`,
    },
    {
      image: '/assets/icons/career.png',
      title: 'Inclusive meritocarcy',
      backgroundColor: "#DDF5F9",
      description: `Whether we're developing software or solving a business problem, we all have access to the information and materials necessary for doing our best work. And when these materials are accessible, we can build upon each other's ideas and discoveries. We can make more effective decisions and understand how decisions affect us.`,

    },
    {
      image: '/assets/icons/career.png',
      title: 'Community',
      backgroundColor: "#DEDDF9",
      description: `Whether we're developing software or solving a business problem, we all have access to the information and materials necessary for doing our best work. And when these materials are accessible, we can build upon each other's ideas and discoveries. We can make more effective decisions and understand how decisions affect us.`,

    },
  ]
  return (
    <section sx={{
      maxWidth: '1126px', mx: 'auto',
      mb: '40px',
      mt: '80px',
      px: '24px'
    }}>
      <div sx={{
        display: 'grid',
        gridTemplateColumns: ['repeat(auto-fit, minmax(320px, 1fr))', null, 'repeat(auto-fit, minmax(510px, 1fr))'],
        gridGap: '56px',
      }}>
        {values.map((value) => (
          <Value data={value} />
        ))}
      </div>
    </section>
  )
}

export default Values