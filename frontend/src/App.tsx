import { useState } from 'react';
import CardCertificate from './components/CertificateSection/CertificateCard';
import CardCertificates from './components/CertificateSection/CertificatesWrapper';
import CourseSection from './components/Course';
import CertificateSection from './components/CertificateSection';
import DiscountSection from './components/DiscountSection';
import Handbook from './components/Handbook';
import HeroSection from './components/HeroSection';
import Icon from './components/Icon';
import MeetInstructor from './components/MeetInstructor';
import NavigatorButton from './components/NavigatorButton';
import Pricing from './components/Pricing';
import Ready from './components/Ready';
import Search from './components/Search';
import SponsorSection from './components/SponsorSection';
import TrustSection from './components/TrustSection';
import TutorialSection from './components/TutorialSection';
import { PATH_IMG } from './utils/constant';
import HeroCourse from './components/Course/HeroCourse';
import CourseDetail from './components/Course/CourseDetail';
import CourseCard from './components/Course/CourseCard';
import Authentication from './components/Authentication';
import Admin from './Page/Admin';
import { Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import OnlyFooterLayout from './Layout/onlyFooter';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Routes> */}
      {/* <Route
          path='/'
          element={
            <>
              <HeroSection />
              <CourseSection />
              <TutorialSection />
              <CertificateSection />
              <DiscountSection />
              <TrustSection />
              <SponsorSection />
              <MeetInstructor />
              <Ready />
              <Footer />
            </>
          }
        /> */}
      {/* <Route path='/admin' element={<Admin />} /> */}
      {/* </Routes> */}

      {/* TODO:*/}
      {/* <Header />
      <div className='container'>
      <HeroCourse />
        <CourseDetail />
        <div className='course-wrapper-course-layout'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          </div>
          </div>
          <div className='section'>
        <MeetInstructor />
      </div>
      <Footer /> */}
      <Admin />
      {/* <OnlyFooterLayout>
        <HeroSection />
        <CourseSection />
        <TutorialSection />
        <CertificateSection />
        <DiscountSection />
        <TrustSection />
        <SponsorSection />
        <MeetInstructor />
        <Ready />
      </OnlyFooterLayout> */}
    </>
  );
}

export default App;
