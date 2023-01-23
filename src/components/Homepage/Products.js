/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Product from './Product.js'
import browseArrow from '../../../static/assets/icons/browse-arrow.svg'
import SectionHeader from '../Common/SectionHeader.js'


const Products = () => {

  const products = [
    {
      title: "Dega",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-img.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Vidcheck",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/vidcheck-img.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Kavach",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/india-img.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Counting India",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-img.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "MandE",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-img.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Bindu",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-img.png",
      status: "Incubating",
      link: "/"
    },
  ]
  return (
    <section sx={{ p: '2rem' }}>
      <div sx={{ maxWidth: '768px', mx: 'auto', mb: '80px', mt: ['0px', null, '80px'] }}>
        <h2 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '36px',
          lineHeight: '44px',
          textAlign: 'center',
          color: '#3E3667',
          mb: '20px'
        }}>Our Products</h2>
        <p sx={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          textAlign: 'center',
          color: '#1E1E1E'
        }}>Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.</p>
      </div>
      <div sx={{
        mb: ['40px', null, '80px'],
        '.product-card:nth-child(even)': {
          backgroundColor: '#F9F9F9',
          '.image-container': {
            order: [0, null, null, 2]
          }
        }
      }}>
        {products.map((product) => (
          <Product data={{ ...product }} />
        ))}
      </div>
    </section>
  )
}

export default Products