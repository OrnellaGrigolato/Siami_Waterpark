import { React, useEffect, useState } from 'react';
import './gallery.css';
import { motion } from 'framer-motion';

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/search/photos?page=1&query=waterpark&client_id=fpK6LEDD_A5qgctiOK6LmDdI1k98Z8tgdKkJBzulH78&per_page=9'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      <h3 className="galleryTitle">See our photos!</h3>
      <div className="flex-container">
        {items.results.map((elem) => {
          return (
            <motion.img
              className="gallery-img"
              whileHover={{
                scale: 1.1
              }}
              key={elem.id}
              alt={elem.alt_description}
              src={`${elem.urls.small}`}></motion.img>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
