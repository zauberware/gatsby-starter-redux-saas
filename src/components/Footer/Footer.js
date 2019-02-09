import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { 
  Box,
  Flex,
  Container,
  Heading,
} from '@magicsoup.io/stock'
import { 
  P,
  Footer as StyledFooter,
} from '../../styled'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        generalJson {
          footer {
            elements {
              headline
              text
            }
          }
        }
      }
    `}
    render={data => 
      <StyledFooter>
        <Container pt={5} pb={4} px={3}>
          <Flex flexWrap='wrap' flexDirection='column'>
            {data.generalJson.footer.elements.map((element, index) => (
              <Box 
                key={`footer-${index}`}
                px={3}
                pt={4}
                pb={3}
                width={[1]}>
                <Heading as='h4' variant='h4' color='white'>{element.headline}</Heading>
                <P color='white' dangerouslySetInnerHTML={{__html: element.text }} />
              </Box>
            ))}
          </Flex>
        </Container>
        <Box 
          bg='primaryDark'
          >
          <Container py={3}>
            <P 
              fontSize={1}
              color='white'
              mt={0}
              textAlign='center'
              >© 2018 - {new Date().getFullYear()} <a href="https://www.zauberware.com" target="_blank">zauberware technologies</a></P>
          </Container>
        </Box>
      </StyledFooter>
    }
  />
)

export default Footer