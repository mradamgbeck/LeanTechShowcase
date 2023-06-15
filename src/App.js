import "./App.css";
import DropDown from "./components/Menu/DropDown";
import Album from "./components/PhotoDisplay/Album";
import { useState } from "react";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState({ id: 1 });
  const callBack = (newAlbum) => {
    setSelectedAlbum({ ...newAlbum });
  };

  return (
    <div className="App">
      <header className="App-header">
        Lean Techniques Photo Album
        <DropDown callBack={callBack} />
      </header>
      <Album albumId={selectedAlbum.id}></Album>
    </div>
  );
}

export default App;
