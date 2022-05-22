import React from 'react';
import { parsePath } from 'react-router-dom';
import { PATH_IMG } from '../../utils/constant';
import CardDetail from '../CardDetail';
import CardSection from '../CardSection';
import CardWrapper from '../CardWrapper';
import CourseHero from '../CourseHero';
import NavigatorButton from '../NavigatorButton';

function CardSectionWrapper() {
  return (
    <div className='container'>
      <CourseHero />
      <CardSection />
      <CardWrapper />
      <NavigatorButton
        isTransition
        more
        round
        hover
        center
        text='Browse courses'
        pathIcon={`${PATH_IMG}/courses.svg`}
      />
    </div>
  );
}

export default CardSectionWrapper;
