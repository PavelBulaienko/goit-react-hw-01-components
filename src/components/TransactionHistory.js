import React from 'react'
import propTypes from 'prop-types'
import '../styles/transactionHistory.scss'

const TransactionHistory = ({ items }) => (
<table className="transaction-history">
  <thead className="tableHeader">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
  <tbody className="transactionBody">
    {items.map(item => 
        <tr key={item.id} className="transactionI">
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: propTypes.array
}

export default TransactionHistory