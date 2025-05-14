
import { useState } from "react";

export default function HomePage() {
  let originalImages = [
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg",
      name: "anne Boonchuy",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/sylvia.fc5ee06d.png",
      name: "sadli Croaker",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png",
      name: "Captain Grime",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png",
      name: "Hop Pop Plantar",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png",
      name: "leopold Loggle",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/toadstool.2b499bfe.jpg",
      name: "Maddie Flour",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png",
      name: "polly Plantar",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/wally.8036609c.png",
      name: "sasha",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/sprig.57a1fbf3.png",
      name: "sprig plantar",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg",
      name: "sylvia sundew",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg",
      name: "mayor Toadstool",
    },
    {
      link: "https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png",
      name: "wally",
    },
  ];

  const [images, setImages] = useState(originalImages);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  const Arraychangefunction = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      let temp = newArray[i];
      newArray[i] = newArray[j] ; 
      newArray[j] = temp;
    }
    return newArray;
  };
  

  const handleClicked = (index) => {
    const clickedName = images[index].name;

    if (clickedImages.includes(clickedName)) {
      setBestScore(Math.max(score, bestScore));
      setScore(0);
      setClickedImages([]);
    } else {
     
      setScore(score + 1);
      setClickedImages([...clickedImages, clickedName]);
      setImages(Arraychangefunction(images));
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-green-700 py-6">
      
      <div className="flex flex-col md:flex-row justify-between px-4 gap-4">
        <div>
          <h1 className="text-yellow-400 text-5xl font-bold drop-shadow-md italic mb-5">
            Amphibia Memory Game
          </h1>
          <p className="text-yellow-300 italic mt-4 font-bold">
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <p className="text-yellow-300 italic mt-5 font-bold">
            Score: {score}
          </p>
          <p className="text-yellow-300 italic font-bold">
            Best score: {bestScore}
          </p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-900 min-h-screen">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg text-center cursor-pointer"
            onClick={() => handleClicked(index)}
          >
            <div className="bg-green-800 p-1">
              <img
                src={item.link}
                alt={item.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
              <p className="text-white font-bold text-xl italic py-4">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



