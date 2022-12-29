import React from 'react'
import Header from '../components/Homepage/Header'
import Products from '../components/Homepage/Products'
import Values from '../components/Homepage/Values'
import Layout from '../components/Layout'

const Homepage = () => {
  return (
    <Layout>
      <Header />
      <Values />
      <Products />
    </Layout>
  )
}

export default Homepage