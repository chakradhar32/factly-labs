import React from 'react'
import Form from '../components/Common/Form'
import Header from '../components/Common/Header'
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import Teams from '../components/Teams/Teams'
import teams from '/teams.json'


const TeamPage = () => {
  return (
    <Layout>
      <Seo
        title="Teams | Factly Labs"
        description=""
      />
      <Header
        title='Our Team'
        description='Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'
      />
      <Teams teams={teams} />
      <Form />
    </Layout>
  )
}

export default TeamPage