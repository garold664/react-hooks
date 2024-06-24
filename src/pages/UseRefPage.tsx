import React, { useRef, useState } from 'react';

export default function UseRefPage() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // setRenderCount(renderCount + 1); // this causes infinite loop of rerenders
    renderCount.current += 1;
  });
  return (
    <>
      <h1>UseRefPage</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={() => inputRef.current?.focus()}>focus</button>
    </>
  );
}
