// import React, { useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';

// const ExampleCarousel = ({ children }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === children.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? children.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <Box>
//       <Box>{children[currentIndex]}</Box>
//       <Box sx={{ textAlign: 'center' }}>
//         <Button onClick={prevSlide}>Previous</Button>
//         <Button onClick={nextSlide}>Next</Button>
        
//       </Box>
//     </Box>
//   );
// };

// export default ExampleCarousel;

import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

const ExampleCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  // Effect to automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 100000); // Change interval duration as needed (in milliseconds)
    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex', padding: '30px',
          transition: 'transform 0.5s ease',
          width: `${children.length * 375}px`,
          transform: `translateX(-${currentIndex * (100 / children.length)}%)`,
        }}
      >
        {children.map((child, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 calc(100% / ${children.length})`, // Adjusted flex property for each card
              '&:not(:last-child)': { marginRight: 0 }, // Removed margin between cards
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button onClick={prevSlide}>Previous</Button>
        <Button onClick={nextSlide}>Next</Button>
      </Box>
    </Box>
  );
};

export default ExampleCarousel;
