
import React from 'react'
import { Card } from '@magicsoup.io/stock'
import { P } from '../../styled'

const Notification = ({variant, messages}) => {
  return (
    <Card 
      variant={variant} 
      p={3} 
      my={3}
      style={{
        zIndex: 1000,
        position: 'fixed',
        right: 20,
        bottom: 20,
      }}>
      { messages.map((message, index) => <P key={`notification-${index}`} mt={0} color='white'>{message}</P>)}
    </Card>
  )
}

export default Notification