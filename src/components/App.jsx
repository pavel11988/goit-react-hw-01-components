import friends from './friend-list/friends.json';
import { FriendList } from './friend-list/FriendList';

import Profile from './social-profile/User';
import user from './social-profile/user.json';

import statistic from './statistics/data.json';
import { StatisticList } from './statistics/StatisticList';

import { TransactionsTable } from './transaction-history/TransactionsTable';
import transactions from './transaction-history/transactions.json';

import { Container } from './App.styled';

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

      <StatisticList title="Upload stats" statistic={statistic}></StatisticList>
      <StatisticList statistic={statistic}></StatisticList>

      <TransactionsTable transactions={transactions}></TransactionsTable>
    </Container>
  );
}
