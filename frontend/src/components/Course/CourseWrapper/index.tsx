import React from 'react';
import CourseCard from '../CourseCard';
function CourseWrapper() {
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
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

export default CourseWrapper;
