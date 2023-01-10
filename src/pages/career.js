import React from 'react'
import Jobs from '../components/Career/Jobs'
import Header from '../components/Common/Header'
import Form from '../components/Common/Form'
import Layout from '../components/Layout'
import Values from '../components/Career/Values'
import { Seo } from '../components/Seo'


const CareerPage = () => {
  return (
    <Layout>
      <Seo
        title="Careers | Factly Labs"
        description=""
      />
      <Header
        title='Join Our Team'
        description='Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'
      />
      <Values />
      <Jobs />
      <Form />
    </Layout>
  )
}

export default CareerPage