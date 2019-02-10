
import React, { Fragment } from 'react'
import { Container, Heading, Card, Flex, Button, Box } from '@magicsoup.io/stock'
import { navigate } from '@reach/router'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { P } from '../../styled'


const GET_PLANS = gql`
  query {
    allPlans{
      paymentGatewayPlanIdentifier
      name
      description
      formattedPrice
      featured
    }
  }
`;

const Plans = () => {

  const selectPlan = () => {
    navigate('/app/profile')
  }
  return (
    <Container>
      <Heading as='h1' variant='h1' textAlign='center'>Sample Pricing</Heading>
      <Flex flexWrap='wrap' alignItems='center'>
        <Query query={GET_PLANS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading..."
            if (error) return `Error! ${error.message}`

            return data.allPlans.map(plan => (
                <Box width={[1, 1/3]} p={3} key={`${plan.paymentGatewayPlanIdentifier}`}>
                  <Card variant={plan.featured ? 'primary' : 'pricing'}>
                    <Heading 
                      as='h2' 
                      variant='h4'
                    >
                      {plan.name}
                    </Heading>
                    <P 
                      fontSize={plan.featured ? 6 : 5} 
                      fontWeight={300}>
                      {plan.formattedPrice}
                    </P>
                    <P mb={4}>
                      {plan.description}
                      {/* { plan.features.map((e, i) => <span key={`plan-${plan.slug}-${i}`}>{e}<br/></span>)} */}
                    </P>
                    <Button
                      variant={plan.featured ? 'white' : 'primary'} 
                      onClick={selectPlan}>
                      Select plan
                    </Button>
                  </Card>
                </Box>
            ))
          }}
        </Query>
      </Flex>
    </Container>
  )
}

export default Plans