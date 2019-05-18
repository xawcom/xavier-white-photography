import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Xavier" desc="Hi. I'm Xavier White Photography! You can visit my website." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi I'm Xavier White Photography!!</h1>
        <p>
          You can visit my <a href="https://www.facebook.com/xavierwhitephotography">website</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
