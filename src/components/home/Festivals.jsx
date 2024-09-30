import React, { useState, useEffect } from "react";
import imagesData from "../../assets/FestivalsImages/imagesData.json";

const Festivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    handleSelectCategory("All");
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      const allImages = Object.values(imagesData).flat().slice(0, 10); // Modify the slice value as needed
      setGalleryImages(allImages);
    } else {
      setGalleryImages(imagesData[category]);
    }
  };

  return (
    <div className="bg-via-white px-4 md:px-10 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-6 font-serif">Festivals</h2>
        </div>
        <div className="flex justify-around mb-8">
          {["All", "Diwali", "Christmas", "Durgapuja", "Holy", "Eid"].map((category) => (
            <h3 key={category} className="category font-bold cursor-pointer" onClick={() => handleSelectCategory(category)}>{category}</h3>
          ))}
        </div>
        {selectedCategory && (
          <div className="flex-grow">
            <div className="images-container">
              <h3 className="text-2xl font-bold mb-4">{selectedCategory}</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="image-container">
                    <img src={require(`../../assets/FestivalsImages/${image}`)} alt={`${selectedCategory} Image ${index}`} className="w-full h-auto md:h-full object-cover rounded-lg" style={{ maxWidth: "200px", maxHeight: "220px" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Festivals;
