import Photo from "./Photo";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";

export default function Album({ albumId }) {
  const [album, setAlbum] = useState({
    photos: [],
  });
  let albumUrl;
  const createUrl = (albumId) => {
    albumUrl = `${BASE_URL}/photos?albumId=${albumId ? albumId : 1}`;
  };

  useEffect(() => {
    const getPhotos = async () => {
      createUrl(albumId);
      try {
        const { data } = await axios.get(albumUrl);
        console.log(`Album ${albumId} retreived`);
        setAlbum({ ...album, photos: data });
      } catch (error) {
        console.log("Could not retreive album.");
      }
    };
    getPhotos();
  });

  return (
    <div className="album">
      {album.photos &&
        album.photos.map((photoData) => (
          <Photo
            data-testid={photoData.id}
            key={photoData.id}
            data={photoData}
          />
        ))}
    </div>
  );
}
