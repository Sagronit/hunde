import { useState } from "react";

type ShuffleButtonProps = {
  onClick: () => void;
};

function ShuffleButton({ onClick }: ShuffleButtonProps) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    onClick();
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000); // Button nach 3 Sekunden wieder aktivieren
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full rounded-lg p-3 text-lg text-white ${
        disabled
          ? "cursor-not-allowed bg-[#3D3D42] opacity-50"
          : "bg-[#3DA4F8] hover:bg-[#31516B]"
      }`}
    >
      Shuffle
    </button>
  );
}

export default ShuffleButton;
