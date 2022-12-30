/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Common/Header';
import About from '../components/About/About';
import Form from '../components/Common/Form';
import WhatWeDo from '../components/About/WhatWeDo';
import Data from '../components/About/Data';

const AboutPage = () => {
  return (
    <Layout>
      <Header title='About Us'
        description='Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.'
      />
      <About />
      <WhatWeDo />
      <Data />
      <Form />
    </Layout>
  )
}

export default AboutPage