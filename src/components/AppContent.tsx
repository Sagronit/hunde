import { useState, useEffect } from "react";
import BreedSelector from "./breedSelector";
import ShuffleButton from "./shuffleButton";
import ImageWithFrame from "./imageWithFrame";

const fetchBreeds = async (): Promise<string[]> => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message);
};

const fetchBreedImage = async (breed: string): Promise<string> => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`,
  );
  const data = await response.json();
  return data.message;
};

function App() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBreeds = async () => {
      const breedList = await fetchBreeds();
      setBreeds(breedList);
      setSelectedBreed(breedList[0]);
    };

    loadBreeds();
  }, []);

  useEffect(() => {
    const loadBreedImage = async () => {
      if (!selectedBreed) return;
      setIsLoading(true);
      const image = await fetchBreedImage(selectedBreed);
      setImageUrl(image);
      setIsLoading(false);
    };

    loadBreedImage();
  }, [selectedBreed]);

  return (
    <div className="min-h-screen bg-[#3D3D42] p-6 text-white">
      <h1 className="mb-6 text-center text-4xl font-bold text-[#3DA4F8]">
        Dog Gallery
      </h1>
      <div className="mx-auto max-w-3xl rounded-lg bg-[#51515A] p-6 shadow-lg">
        <BreedSelector
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={setSelectedBreed}
        />
        <div className="mt-4">
          <ShuffleButton
            onClick={async () => {
              setIsLoading(true);
              const newImage = await fetchBreedImage(selectedBreed);
              setImageUrl(newImage);
              setIsLoading(false);
            }}
          />
        </div>
      </div>
      {isLoading ? (
        <p className="mt-6 text-center">Loading...</p>
      ) : (
        <ImageWithFrame imageUrl={imageUrl} />
      )}
    </div>
  );
}

export default App;
