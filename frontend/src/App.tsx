import { useState } from 'react';
import CardCertificate from './components/CertificateSection/CertificateCard';
import CardCertificates from './components/CertificateSection/CertificatesWrapper';
import CourseSection from './components/Course';
import CertificateSection from './components/CertificateSection';
import DiscountSection from './components/DiscountSection';
import Handbook from './components/Handbook';
import HeroSection from './components/HeroSection';
import Icon from './components/Icon';
import Layout from './components/Layout';
import Footer from './components/Layout/Footer';
import MeetInstructor from './components/MeetInstructor';
import NavigatorButton from './components/NavigatorButton';
import Pricing from './components/Pricing';
import Ready from './components/Ready';
import Search from './components/Search';
import SponsorSection from './components/SponsorSection';
import TrustSection from './components/TrustSection';
import TutorialSection from './components/TutorialSection';
import Header from './components/Layout/Header';
import { PATH_IMG } from './utils/constant';
import HeroCourse from './components/Course/HeroCourse';
import CourseDetail from './components/Course/CourseDetail';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* DONE: */}
      {/* <HeroSection /> */}
      {/* <CourseSection /> */}
      {/* <TutorialSection /> */}
      {/* <CertificateSection /> */}
      {/* <DiscountSection /> */}
      {/* <TrustSection /> */}
      {/* <SponsorSection /> */}
      {/* <MeetInstructor /> */}
      {/* <Ready /> */}
      {/* <Footer /> */}

      {/* TODO*/}
      <Header />
      <HeroCourse />
      <CourseDetail />
    </>
  );
}

export default App;
