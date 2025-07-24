import React, { useEffect, useState } from "react";
import type { UnsplashImage } from "../Type";

const Images = ({
  results,
  currentPage,
}: {
  results: UnsplashImage[];
  currentPage: number;
}) => {
  const [images, setImages] = useState<UnsplashImage[]>();
  //log statement
  //console.log(results);
  useEffect(() => {
    setImages(results.slice((currentPage - 1) * 6, currentPage * 6));
    //log statement
    // console.log(results.slice((currentPage - 1) * 6, currentPage * 6));
  }, [currentPage]);

  //log statement
  //console.log(currentPage);
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

export default React.memo(Images);
