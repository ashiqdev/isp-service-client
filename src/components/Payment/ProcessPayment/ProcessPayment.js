import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_vmPAZSq7LkBKJzkVs8moCt6D');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default ProcessPayment;
