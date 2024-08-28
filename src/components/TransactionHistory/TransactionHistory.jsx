import './components/TransactionHistory/TransactionHistory.module.css';
import TransactionHistoryItem from './components/TransactionsHistoryItem.jsx';

const TransactionHistory = ({ items }) => {
  const arrayTransaction = items.map(transaction => (
    <TransactionHistoryItem
      key={transaction.id}
      type={transaction.type}
      amount={transaction.amount}
      currency={transaction.currency}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{arrayTransaction}</tbody>
    </table>
  );
};
export default TransactionHistory;
