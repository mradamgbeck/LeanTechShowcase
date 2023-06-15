import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";

export default function DropDown({ callBack }) {
  const [albumData, setAlbumData] = useState({
    albums: [],
  });

  useEffect(() => {
    const getAlbumIds = async () => {
      const { data } = await axios(`${BASE_URL}/albums`);
      setAlbumData({ ...albumData, albums: data });
    };
    getAlbumIds();
  });

  return (
    <div className="dropDown">
      <p>Choose an album: </p>
      <select name="albums" id="albums">
        {albumData.albums &&
          albumData.albums.map((albumDatum) => (
            <option
              key={albumDatum.id}
              value={albumDatum.id}
              onClick={() => {
                callBack(albumDatum);
              }}
            >
              {albumDatum.id}
            </option>
          ))}
      </select>
    </div>
  );
}
