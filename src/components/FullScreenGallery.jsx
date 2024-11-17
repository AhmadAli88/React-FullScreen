import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const FullScreenGallery = () => {
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>View Gallery in Full Screen</button>
      <FullScreen handle={handle}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '20px', background: 'lightgray', height: '100vh' }}>
          <img src="https://via.placeholder.com/400x300" alt="Image 1" />
          <img src="https://via.placeholder.com/400x300" alt="Image 2" />
          <img src="https://via.placeholder.com/400x300" alt="Image 3" />
          <img src="https://via.placeholder.com/400x300" alt="Image 4" />
          <button onClick={handle.exit} style={{ gridColumn: '1 / -1', margin: '20px auto' }}>
            Exit Full Screen
          </button>
        </div>
      </FullScreen>
    </div>
  );
};

export default FullScreenGallery;
