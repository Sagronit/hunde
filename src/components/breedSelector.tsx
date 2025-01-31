type BreedSelectorProps = {
  breeds: string[];
  selectedBreed: string;
  onChange: (breed: string) => void;
};

function BreedSelector({
  breeds,
  selectedBreed,
  onChange,
}: BreedSelectorProps) {
  return (
    <div>
      <label
        htmlFor="breed-selector"
        className="mb-2 block text-lg font-medium text-[#3DA4F8]"
      >
        Choose a breed:
      </label>
      <select
        id="breed-selector"
        value={selectedBreed}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-[#31516B] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#3DA4F8]"
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BreedSelector;
