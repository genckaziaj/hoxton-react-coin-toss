import { useState } from "react";
import { CoinImage } from "./components/CoinImage";
import { FlipButton } from "./components/FlipButton";
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
      <CoinImage image={image} />
      <FlipButton changeImage={changeImage} />
    </div>
  );
}

export default App;
