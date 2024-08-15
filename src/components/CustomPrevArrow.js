import React from 'react';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      &#9664; 
    </button>
  );
};

export default CustomPrevArrow;