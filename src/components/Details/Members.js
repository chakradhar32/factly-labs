/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import Card from './Card'


const Members = () => {

  const members = [
    {
      image: "/assets/images/bharath.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
    {
      image: "/assets/images/chakri.png",
      name: "Bharath Guniganti",
      position: "Head-Operations",
      link: "/"
    },
    {
      image: "/assets/images/jyothi.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
    {
      image: "/assets/images/abhishek.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
    {
      image: "/assets/images/chakri.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
    {
      image: "/assets/images/bharath.png",
      name: "Bharath Guniganti",
      position: "Head-Operations",
      link: "/"
    },
    {
      image: "/assets/images/abhishek.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
    {
      image: "/assets/images/jyothi.png",
      name: "Rakesh Dubbudu",
      position: "Founder, Factly",
      link: "/"
    },
  ]
  return (
    <section sx={{
      maxWidth: '1120px', mx: 'auto',
      py: ['40px', null, '100px'],
      px: ['24px', null, '0px']
    }}>
      <div sx={{ mb: ['0px', null, '68px'] }}>
        <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '38px',
            lineHeight: '28px',
            color: '#1E1E1E'
          }}
          >Orgaization Team</h1>
          <Link to='#' sx={{
            color: '#3E3667',
            display: ['none', null, 'inline-block'],
            background: '#F8F8F8',
            border: '1px solid #3E3667',
            borderRadius: '4px',
            py: '18px',
            px: '32px'
          }}>View Open Jobs</Link>
        </div>
        <p sx={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px',
          color: '#6C6C6C',
          mt: '32px'

        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
      </div>
      <Link to='#' sx={{
        color: '#3E3667',
        display: ['inline-block', null, 'none'],
        background: '#F8F8F8',
        border: '1px solid #3E3667',
        borderRadius: '4px',
        py: '18px',
        px: '32px',
        my: ['52px', null, '0px']
      }}>View Open Jobs</Link>
      <div sx={{
        display: 'grid',
        gridTemplateColumns: ['repeat(auto-fit, minmax(150px, 1fr))', null, 'repeat(auto-fit, minmax(220px, 1fr))'],
        gridGap: '56px 24px',
      }}>
        {members.map((member) => (
          <Card data={{ ...member }} />
        ))}
      </div>
    </section>
  )
}

export default Members