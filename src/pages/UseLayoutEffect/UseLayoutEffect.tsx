import React, { useEffect, useLayoutEffect, useRef } from 'react';

export default function UseLayoutEffect() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  // useEffect(() => {
  useLayoutEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) {
      return;
    }

    const { bottom } = popupRef.current.getBoundingClientRect();
    popupRef.current.style.top = `${bottom + 25}px`;
  }, [show]);
  return (
    <>
      <h1>UseLayoutEffect</h1>
      <button ref={buttonRef} onClick={() => setShow((show) => !show)}>
        click me
      </button>
      {show && (
        <div ref={popupRef} style={{ position: 'absolute' }}>
          this is a popup
        </div>
      )}
    </>
  );
}
