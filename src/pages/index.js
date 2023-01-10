import React from 'react'
import Header from '../components/Homepage/Header'
import Products from '../components/Homepage/Products'
import Values from '../components/Homepage/Values'
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'


const Homepage = () => {
  return (
    <Layout>
      <Seo
        title="Home | Factly Labs"
        description=""
      />
      <Header />
      <Values />
      <Products />
    </Layout>
  )
}

export default Homepage