/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Product from './Product.js'
import rightArrow from '../../../static/assets/icons/right-arrow.svg'


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
      <div sx={{
        my: ['20px', null, '80px'],
        '.product-card:nth-child(even)': {
          backgroundColor: '#F9F9F9',
          '.image-container': {
            order: 2
          }
        }
      }}>
        {products.map((product) => (
          <Product data={{ ...product }} />
        ))}
      </div>
      <div sx={{ display: 'flex', justifyContent: 'center' }}>
        <button sx={{
          display: 'flex', alignItems: 'center', bg: '#3E3667', fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '18px',
          color: '#FFFFFF', px: '32px', py: '12px', gap: '10px'
        }}>
          Browse all Products
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </section>
  )
}

export default Products