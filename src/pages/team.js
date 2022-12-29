import React from 'react'
import Form from '../components/Common/Form'
import Header from '../components/Common/Header'
import Layout from '../components/Layout'
import Teams from '../components/Team/Teams'


const TeamPage = () => {
  return (
    <Layout>
      <Header
        title='Our Team'
        description='Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'
      />
      <Teams />
      <Form />
    </Layout>
  )
}

export default TeamPage