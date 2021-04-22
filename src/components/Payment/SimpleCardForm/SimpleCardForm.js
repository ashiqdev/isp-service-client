import { Button } from '@material-ui/core';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <CardElement />
        <Button
          variant='contained'
          style={{ marginTop: '1rem' }}
          type='submit'
          disabled={!stripe}
        >
          Pay
        </Button>
      </form>
      {paymentError && <p>{paymentError}</p>}

      {paymentSuccess && <p>Your payment successful</p>}
    </div>
  );
};

export default SimpleCardForm;
