import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const FullScreenState = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Toggle Full Screen</button>
      <FullScreen handle={handle} onChange={setIsFullScreen}>
        <div style={{ height: '100vh', background: isFullScreen ? 'green' : 'red' }}>
          {isFullScreen ? 'You are in full screen!' : 'You are NOT in full screen!'}
          <button onClick={handle.exit} style={{marginLeft: '1rem', marginTop: '20px'}}>Exit Full Screen</button>
        </div>
      </FullScreen>
    </div>
  );
};

export default FullScreenState;
