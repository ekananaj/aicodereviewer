import React from 'react';
import CodeUploader from './components/CodeUploader';
import ReviewSuggestions from './components/ReviewSuggestions';

function App() {
  return (
    <div>
      <h1>AI Code Reviewer</h1>
      <CodeUploader />
      <ReviewSuggestions />
    </div>
  );
}

export default App;
