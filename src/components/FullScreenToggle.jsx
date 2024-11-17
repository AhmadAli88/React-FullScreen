import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const FullScreenToggle = () => {
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Enter Full Screen</button>
      <FullScreen handle={handle}>
        <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
          <h1>This is full screen!</h1>
          <button onClick={handle.exit}>Exit Full Screen</button>
        </div>
      </FullScreen>
    </div>
  );
};

export default FullScreenToggle;
