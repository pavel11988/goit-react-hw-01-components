import PropTypes from 'prop-types';
import { TransactionRow, TransactionCol } from './Transactions.styled';

const Transaction = ({ id, type, amount, currency }) => {
  return (
    <TransactionRow>
      <TransactionCol>{type}</TransactionCol>
      <TransactionCol>{amount}</TransactionCol>
      <TransactionCol>{currency}</TransactionCol>
    </TransactionRow>
  );
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transaction;
