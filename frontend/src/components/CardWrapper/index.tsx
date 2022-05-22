import React from 'react';
import CardCourse from '../CardCourse';

function CardWrapper() {
  return (
    <div
      className=''
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      <CardCourse />
      <CardCourse />
      <CardCourse />
      <CardCourse />
      <CardCourse />
    </div>
  );
}

export default CardWrapper;
