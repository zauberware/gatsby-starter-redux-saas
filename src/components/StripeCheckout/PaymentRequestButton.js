import React from 'react'
import { PaymentRequestButtonElement, injectStripe } from 'react-stripe-elements'

class PaymentRequestButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canMakePayment: false,
      paymentRequest: null,
    }
  }

  componentDidMount() {
    const { plan, stripe } = this.props
    console.log(this.props)
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = stripe.paymentRequest({
      country: 'DE',
      currency: 'eur',
      total: {
        label: plan.name,
        amount: plan.priceCents,
      },
    })

    paymentRequest.on('token', ({complete, token, ...data}) => {
      complete('success')
    })

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: !!result})
    })
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: 'light',
            height: '64px',
            width: '300px',
          },
        }}
      />
    ) : null
  }
}
export default injectStripe(PaymentRequestButton)