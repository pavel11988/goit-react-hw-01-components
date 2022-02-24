import Friend from './friend-list/Friend';
import friends from './friend-list/friends.json';
import Profile from './social-profile/User';
import user from './social-profile/user.json';
import Statistic from './statistics/Statistics';
import statisticData from './statistics/data.json';
import TransactionHistory from './transaction-history/Transaction';
import transactions from './transaction-history/transactions.json';

import { Container, FriendList } from './App.styled';

export default function App() {
  return (
    <Container>
      <FriendList>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </FriendList>

      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <section>
        <h2>Upload stats</h2>
        <ul>
          {statisticData.map(data => (
            <Statistic
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </ul>
      </section>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
