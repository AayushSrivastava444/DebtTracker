import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DebtList.css'

export default function DebtList() {
  const [debts, setDebts] = useState([])

  useEffect(() => {
    fetchDebts()
  }, [])

  const fetchDebts = () => {
    axios.get('http://localhost:5000/api/debts')
      .then(res => setDebts(res.data))
      .catch(err => console.error(err))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/debts/${id}`)
      .then(() => fetchDebts())
      .catch(err => console.error(err))
  }

  return (
    <div className="debt-list">
      <h3>All Debts</h3>
      <ul>
        {debts.length === 0 && <li>No debts found.</li>}
        {debts.map(debt => (
          <li key={debt._id}>
            <span>{debt.Name} - ₹{debt.Amount} - {debt.Type}</span>
            <button onClick={() => handleDelete(debt._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
