import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <h2>About DebtTracker</h2>
      <p>
        DebtTracker is a simple app to manage money you owe or money owed to you.
      </p>
      <p>
        Add debts, view all debts, and delete them once settled.
      </p>
      <p>
        Built with React (frontend) and Node.js + Express + MongoDB (backend).
      </p>
    </div>
  )
}
