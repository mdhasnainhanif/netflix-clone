import React from 'react'

const Faq = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-lg mx-auto">
        <div className="border border-gray-300 rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b border-gray-300">
            <button className="flex items-center justify-between w-full focus:outline-none">
              <span className="text-lg font-medium">Question 1?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-0 transition-transform duration-300 ease-in-out" viewBox="0 0 24 24">
                <path className="fill-current text-gray-600" d="M9 5l-1.41 1.41L12 11.83l4.41-4.42L15 5l-6 6z" />
              </svg>
            </button>
          </div>
          <div className="p-4 hidden">
            <p className="text-gray-700">Answer 1.</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b border-gray-300">
            <button className="flex items-center justify-between w-full focus:outline-none">
              <span className="text-lg font-medium">Question 2?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-0 transition-transform duration-300 ease-in-out" viewBox="0 0 24 24">
                <path className="fill-current text-gray-600" d="M9 5l-1.41 1.41L12 11.83l4.41-4.42L15 5l-6 6z" />
              </svg>
            </button>
          </div>
          <div className="p-4 hidden">
            <p className="text-gray-700">Answer 2.</p>
          </div>
        </div>
        {/* Add more questions and answers as needed */}
      </div>
    </div>
  )
}

export default Faq