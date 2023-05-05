import React from 'react';
import { useParams } from 'react-router-dom';

const PorductLayout = () => {
  const params = useParams();
  // console.log(params);
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default PorductLayout;
