import React from 'react';
import CertificateSection from '../components/CertificateSection';
import CourseSection from '../components/CourseSection';
import DiscountSection from '../components/DiscountSection';
import HeroSection from '../components/HeroSection';
import MeetInstructor from '../components/MeetInstructor';
import Ready from '../components/Ready';
import SponsorSection from '../components/SponsorSection';
import TrustSection from '../components/TrustSection';
import TutorialSection from '../components/TutorialSection';
import OnlyFooterLayout from '../Layout/OnlyFooter';

function Home() {
  return (
    <OnlyFooterLayout>
      <HeroSection />
      <CourseSection />
      <TutorialSection />
      <CertificateSection />
      <DiscountSection />
      <TrustSection />
      <SponsorSection />
      <MeetInstructor />
      <Ready />
    </OnlyFooterLayout>
  );
}

export default Home;
