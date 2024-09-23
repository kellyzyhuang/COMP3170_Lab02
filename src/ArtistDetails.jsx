const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-details">
      <img src={artist.photo_url} alt={artist.name} style={{ width: '200px', height: '200px', objectFit: 'cover'}}/>
        <div>
          <h3>{artist.name}</h3>
          <p>Country: {artist.country}</p>
          <p>Years Active: {artist.years_active}</p>
        </div>
    </div>
  );
};

export default ArtistDetails;
