
import React, { Fragment } from 'react'
import { Container, Heading, Card, Flex, Button, Box } from '@magicsoup.io/stock'
import { P } from '../../styled'
import { StaticQuery, graphql } from 'gatsby'

const Plans = () => {

  return (
    <Container>
      <Heading as='h1' variant='h1' textAlign='center'>Our pricing</Heading>
      <Flex flexWrap='wrap' alignItems='center'>
      <StaticQuery
          query={graphql`
            query PlansQuery {
              allPlansJson {
                edges {
                  node {
                    id
                    slug
                    title
                    price
                    featured
                    features
                  } 
                }
              }
            }
          `}
          render={data => {
            return data.allPlansJson.edges.map(plan => (
              <Box width={[1, 1/3]} p={3} key={`${plan.node.slug}`}>
                <Card variant={plan.node.featured ? 'primary' : 'pricing'}>
                  <Heading 
                    as='h2' 
                    variant='h4'
                  >
                    {plan.node.title}
                  </Heading>
                  <P 
                    fontSize={plan.node.featured ? 6 : 5} 
                    fontWeight={300}>
                    {plan.node.price}
                  </P>
                  <P mb={4}>
                    { plan.node.features.map((e, i) => <span key={`plan-${plan.slug}-${i}`}>{e}<br/></span>)}
                  </P>
                  <Button 
                    variant={plan.node.featured ? 'white' : 'primary'} 
                    onClick={() => window.alert(`Select plan ${plan.node.title}`)}>
                    Select plan
                  </Button>
                </Card>
              </Box>
            ))
          }}
        />
      </Flex>
    </Container>
  )
}

export default Plans