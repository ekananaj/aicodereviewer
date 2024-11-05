import React, { useState } from 'react';

function CodeUploader() {
  const [codeFile, setCodeFile] = useState(null);

  const handleFileUpload = (event) => {
    setCodeFile(event.target.files[0]);
  };

  const uploadCode = () => {
    const formData = new FormData();
    formData.append('file', codeFile);

    fetch('http://localhost:8000/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadCode}>Upload Code</button>
    </div>
  );
}

export default CodeUploader;
