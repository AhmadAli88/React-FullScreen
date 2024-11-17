import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const FullScreenVideoPlayer = () => {
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Play in Full Screen</button>
      <FullScreen handle={handle}>
        <div style={{ background: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video controls style={{ width: '80%', height: 'auto' }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <button onClick={handle.exit} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            Exit
          </button>
        </div>
      </FullScreen>
    </div>
  );
};

export default FullScreenVideoPlayer;
