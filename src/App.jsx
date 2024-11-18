import './App.css';
import FullScreenGallery from './components/FullScreenGallery';
import FullScreenState from './components/FullScreenState ';
import FullScreenToggle from './components/FullScreenToggle';
import FullScreenVideoPlayer from './components/FullScreenVideoPlayer';

function App() {
  return (
    <div>
      <FullScreenToggle />
      <FullScreenVideoPlayer />
      <FullScreenGallery />
      <div style={{ marginTop: '5rem' }}>
        <FullScreenState />
      </div>
    </div>
  );
}

export default App;
