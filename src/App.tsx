import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState({ src: "../public/assets/Front.jpg" });

  function changeImage() {
    const imageClone = structuredClone(image);

    if (imageClone.src === "../public/assets/Front.jpg")
      imageClone.src = "../public/assets/Back.jpg";
    else imageClone.src = "../public/assets/Front.jpg";

    setImage(imageClone);
  }

  return (
    <div className="App">
      <div className="coin">
        <img className="image" src={image.src} />
      </div>
      <button
        className="button"
        onClick={() => {
          changeImage();
        }}
      >
        Toss Coin
      </button>
    </div>
  );
}

export default App;
