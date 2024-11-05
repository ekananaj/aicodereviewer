import React, { useState, useEffect } from 'react';

function ReviewSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/review')
      .then(response => response.json())
      .then(data => setSuggestions(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Code Review Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewSuggestions;
