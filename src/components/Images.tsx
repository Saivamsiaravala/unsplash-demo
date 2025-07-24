import { useEffect, useState } from "react";
import type { UnsplashImage } from "../Type";

const Images = ({
  results,
  currentPage,
}: {
  results: UnsplashImage[];
  currentPage: number;
}) => {
  const [images, setImages] = useState<UnsplashImage[]>();
  useEffect(() => {
    setImages(results.slice((currentPage - 1) * 8, currentPage * 8));
  }, [currentPage, results]);

  return (
    <div className="images">
      {images && (
        <div className="list-image">
          {images.map((image: UnsplashImage) => {
            return (
              <li key={image.id} className="list-image-item">
                <img
                  src={image.urls.small}
                  alt={image.description ? image.description : "Photo"}
                  className="image"
                />
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Images;
