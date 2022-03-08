import PropTypes from 'prop-types';

import {
  TransactionsNames,
  TransactionsValues,
  Table,
} from './TransactionsTable.styled';

import { Transaction } from './Transaction';

export const TransactionsTable = ({ transactions }) => {
  return (
    <Table>
      <TransactionsNames>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionsNames>

      <TransactionsValues>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TransactionsValues>
    </Table>
  );
};

TransactionsTable.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
