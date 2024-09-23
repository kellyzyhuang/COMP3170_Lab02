import ArtistDetails from './ArtistDetails';
import { artists } from './best-selling-music-artists'; 

function App() {
  return (
    <div className="app">
      <h1 className="title">Best-Selling Music Artists</h1>
        <div className="artist-list">
          {artists.map((artist, index) => (
            <ArtistDetails key={index} artist={artist}/>
          ))}
        </div>
    </div>
  );
};

export default App;