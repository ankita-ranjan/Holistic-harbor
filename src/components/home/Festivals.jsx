import React, { useState, useEffect } from "react";
import holyimage from "../../assets/FestivalsImages/holyimage.jpg";

const Festivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allImages, setAllImages] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      const allCategories = [
        "Hindu",
        "Christmas",
        "Corpus Christi",
        "Holy Innocents",
        "Lammas",
      ];
      const allImages = allCategories
        .flatMap(
          (cat) => Array(5).fill(holyimage) // Changed from 4 to 5 images per category
        )
        .slice(0, 10); // Take only the first 9 images
      setAllImages(allImages);
    }
  };

  useEffect(() => {
    handleSelectCategory("All");
  }, []);

  const FestivalGallery = ({ selectedCategory }) => {
    const galleryImages = {
      Hindu: Array(5).fill(holyimage), // Changed from 4 to 5 images per category
      Christmas: Array(5).fill(holyimage),
      "Corpus Christi": Array(5).fill(holyimage),
      "Holy Innocents": Array(5).fill(holyimage),
      Lammas: Array(5).fill(holyimage),
      All: allImages,
    };

    return (
      <div className="flex-grow">
        {selectedCategory && (
          <div className="images-container">
            <h3 className="text-2xl font-bold mb-4">
              {selectedCategory} image
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
              {galleryImages[selectedCategory]?.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`${selectedCategory} Image ${index}`}
                    className="w-full h-auto md:h-full object-cover rounded-lg"
                    style={{ maxWidth: "100%", maxHeight: "150px" }} //
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-via-white px-4 md:px-10 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-6 font-serif">
            Festivals
          </h2>
        </div>
        <div className="flex justify-around mb-8">
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("All")}
            >
              All
            </h3>
          </div>
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("Hindu")}
            >
              Hindu Festival
            </h3>
          </div>
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("Christmas")}
            >
              Christmas
            </h3>
          </div>
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("Corpus Christi")}
            >
              Corpus Christi
            </h3>
          </div>
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("Holy Innocents")}
            >
              Holy Innocents
            </h3>
          </div>
          <div>
            <h3
              className="category font-bold"
              onClick={() => handleSelectCategory("Lammas")}
            >
              Lammas
            </h3>
          </div>
        </div>

        <FestivalGallery selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Festivals;
