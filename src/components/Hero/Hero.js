import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Card, Heading, Text } from '@magicsoup.io/stock'
import { P } from '../../styled'
import { themeGet } from 'styled-system'


const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        heroJson {
          displayTitle
          subTitle
        }
      }
    `}
    render={data => (
      <Card >
        <Flex
          ml={[2,5,6]}
          pl={4}
          my={[5, 5]}
          alignItems='center'
          style={{borderLeft: `5px dotted #7D97E5`}}
        >
          <Box>
            <Heading as='h1' variant='h1' fontSize={[5,6,7]} m={0}>
              {data.heroJson.displayTitle}
            </Heading>
            <P fontSize={3} mb={3}>
              {data.heroJson.subTitle}
            </P>
            
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          flexWrap='wrap'
        >
          <Card variant='primary' p={3} width={[1, 3/5]} style={{ '&:hover': { margin: 1}}}>
            <Heading as='h2' variant='h2'>
              Gatsby Starter
            </Heading>
            <P fontSize={3} mb={4}>Redux, Apollo, Authentication, SEO friendly, GWT, Responsive, Markdown, Static content, Web-Fonts, SSR, Testing</P>
            <Flex justifyContent='center' alignItems='center'>
              <Box 
                as='a' 
                className='github-button' 
                data-icon='octicon-star'
                href='https://github.com/zauberware/gatsby-starter-redux-saas' 
                data-size='large' 
                data-show-count='true' 
                aria-label={`Star this repo on GitHub`}
                >
                Star on GitHub
              </Box>
              <Box pl={4}>
                <Link to='/pages/readme'>
                  <Text color='white'>Go to Readme →</Text>
                </Link>
              </Box>
            </Flex>
          </Card>

          <Card variant='primaryDark' p={3} width={[1, 2/5]} mx={[3, 0]}>
            <Heading as='h2' variant='h3' style={{color: 'white'}}>
              RubyOnRails Backend
            </Heading>
            <P fontSize={3} mb={4}>Rails 5, Authentication with devise + JWT, GraphQL, CORS, SSL</P>
            <Flex justifyContent='center' alignItems='center'>
              <Box 
                as='a'
                className='github-button' 
                data-icon='octicon-star'
                href='https://github.com/zauberware/rails-devise-graphql' 
                data-size='large' 
                data-show-count='true' 
                aria-label={`Star this repo on GitHub`}>
                Star on GitHub
              </Box>
              <Box pl={4} as='a' href='https://github.com/zauberware/rails-devise-graphql' color='white'>
                Go to Readme →
              </Box>
            </Flex>
          </Card>
        
        </Flex>
      </Card>
    )}
  />
)

export default Hero
