import React from 'react';
import './EmployeeQuote.css';

function EmployeeQuote() {
  const quotes = [
    {
      text: "Working at Arbab has been an inspiring journey of innovation and collaboration. We are always encouraged to think outside the box.",
      author: "John Doe, Manager",
      image: "/images/employee1.jpg"
    },
    {
      text: "The team spirit and supportive environment at Arbab have helped me grow both personally and professionally.",
      author: "Jane Smith, Team Lead",
      image: "/images/employee2.jpg"
    },
    {
      text: "At Arbab, we are committed to delivering excellence in everything we do. Our clients’ success is our success.",
      author: "CEO, Arbab Pack Ltd",
      image: "/images/ceo.jpg"
    }
  ];

  return (
    <section className="employee-quotes">
      <h2>What Our Employees Say</h2>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div className="quote-item" key={index}>
            <img src={quote.image} alt={quote.author} />
            <blockquote>{quote.text}</blockquote>
            <p className="quote-author">{quote.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EmployeeQuote;
