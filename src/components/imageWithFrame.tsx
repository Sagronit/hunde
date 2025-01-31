import { useEffect, useRef } from "react";

type ImageWithFrameProps = {
  imageUrl: string;
};

function ImageWithFrame({ imageUrl }: ImageWithFrameProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = imageRef.current;
    if (frame) {
      frame.classList.add("border-blue-500");
      setTimeout(() => frame.classList.remove("border-blue-500"), 500);
    }
  }, [imageUrl]);

  return (
    <div
      ref={imageRef}
      className="mx-auto mt-6 max-w-lg border-4 border-transparent p-4"
    >
      <img src={imageUrl} alt="Dog" className="h-auto w-full rounded-lg" />
    </div>
  );
}

export default ImageWithFrame;
