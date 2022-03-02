import friends from './friend-list/friends.json';
import { FriendList } from './friend-list/FriendList';

import Profile from './social-profile/User';
import user from './social-profile/user.json';

import statistic from './statistics/data.json';
import { StatisticList } from './statistics/StatisticList';

import TransactionHistory from './transaction-history/Transaction';
import transactions from './transaction-history/transactions.json';

import {
  Container,
  Transactions,
  TransactionsNames,
  TransactionsValues,
} from './App.styled';

export default function App() {
  return (
    <Container>
      <FriendList friends={friends}></FriendList>

      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatisticList statistic={statistic}></StatisticList>

      <Transactions>
        <TransactionsNames>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionsNames>

        <TransactionsValues>
          {transactions.map(transaction => (
            <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </TransactionsValues>
      </Transactions>
    </Container>
  );
}
