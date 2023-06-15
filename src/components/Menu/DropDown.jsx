import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";

export default function DropDown({ callBack }) {
  const [albumData, setAlbumData] = useState({
    albums: [],
  });

  useEffect(() => {
    const getAlbumIds = async () => {
      try {
        console.log("Retreiving Album list...");
        const { data } = await axios.get(`${BASE_URL}/albums`);
        setAlbumData({ ...albumData, albums: data });
      } catch (error) {
        console.log(`Could not retreive album data: ${error}`);
      }
      return () => {};
    };
    getAlbumIds();
  }, []);

  return (
    <div className="dropDown">
      <p>Choose an album: </p>
      <select data-testid="select" name="albums" id="albums">
        {albumData.albums &&
          albumData.albums.map((album) => (
            <option
              key={album.id}
              value={album.id}
              onClick={() => {
                callBack(album);
              }}
            >
              {album.id}
            </option>
          ))}
      </select>
    </div>
  );
}
