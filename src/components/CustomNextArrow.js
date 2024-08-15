import React from 'react';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      &#9654; 
    </button>
  );
};

export default CustomNextArrow;