import React from 'react';

import Alumnis from './Alumnis';
import Infrastaructure from './Infrastracture';

const Campus = () => {
  return (
    <div>
      <h1>Campus</h1>
      <p>Welcome to the Campus page. Here you will have to get a view on some of our infrastructures and also get to see several views and feedbacks from our Alumnis. </p>
      <hr/>
      
      <div>
        <Infrastaructure/>
        <hr/>
        <Alumnis />
      </div>
    </div>
  );
};

export default Campus;
