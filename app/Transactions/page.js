import React from 'react'
import TransationsList from './TransationsList'
import PendingTransactions from './PendingTransactions'
import CompletedTransactions from './CompletedTransactions'

// Main page component
const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <TransationsList/>
      <div className="space-y-6 mt-6">
        <PendingTransactions/>
        <CompletedTransactions/>
      </div>
    </div>
  )
}

export default page