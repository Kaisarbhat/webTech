import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
}
export default ControlledComponent;