import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    console.log('Input Value:', inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UncontrolledComponent;