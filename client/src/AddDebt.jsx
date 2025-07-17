import React, { useState } from 'react'
import axios from 'axios'
import './AddDebt.css'

export default function AddDebt() {
  const [debt, setDebt] = useState({
    Name: '',
    Amount: '',
    Type: 'owed'
  })

  const handleChange = (e) => {
    setDebt(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/debts', debt)
      setDebt({ Name: '', Amount: '', Type: 'owed' })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="add-debt-form" onSubmit={handleSubmit}>
      <h3>Add a New Debt</h3>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        id="Name"
        name="Name"
        value={debt.Name}
        onChange={handleChange}
        required
        placeholder="Enter name"
      />

      <label htmlFor="Amount">Amount</label>
      <input
        type="number"
        id="Amount"
        name="Amount"
        value={debt.Amount}
        onChange={handleChange}
        required
        placeholder="Enter amount"
      />

      <label htmlFor="Type">Type</label>
      <select
        id="Type"
        name="Type"
        value={debt.Type}
        onChange={handleChange}
      >
        <option value="owed">Owed to you</option>
        <option value="owes">You owe</option>
      </select>

      <button type="submit">Add Debt</button>
    </form>
  )
}
