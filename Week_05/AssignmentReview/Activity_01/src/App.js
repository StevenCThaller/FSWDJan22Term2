import "./App.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([])
  const [numPhotos, setNumPhotos] = useState(10)

  // This URL can be combined with a photo id to fetch a photo.
  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };
  // This URL can be used to get an array of objects that contain information about various photos.
  const PHOTO_LIST_URL = "https://picsum.photos/list";

  useEffect(() => {
    fetch(PHOTO_LIST_URL)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(err => alert("Something went wrong, please try again."))
  }, [])


  return (
    <div className="App">
      <header>
        <h1>Photo Wall</h1>
      </header>
      <div className="collage">
        {photos &&
          photos.filter((_, i) => i < numPhotos)
            .map((photo) => (
              <img
                alt={photo.filename}
                key={photo.id}
                src={getPhotoFromId(photo.id)}
              />
            ))}
      </div>
      <button className="more-btn" onClick={() => setNumPhotos(numPhotos + 10)}>Get 10 More</button>
    </div>
  );
};

export default App;
