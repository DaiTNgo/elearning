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
import { PATH_IMG } from './utils/constant';

function App() {
  const [count, setCount] = useState(0);

  return (
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

      {/* <CardSection /> */}
      {/* <HeroSection /> */}
      {/* <TutorialSection />
      <DiscountSection />
      <TrustSection />
      <SponsorSection />
      <MeetInstructor />
      <Ready />
      <Footer /> */}
      {/* <CardSectionWrapper />
       */}
      {/* <CardWrapper /> */}
      {/* <Handbook />
      <CertificateSection />
      <Pricing /> */}
    </>
    // <Layout>
    //   <Search />
    //   {/* <CardCourse />
    //   <CardInstructor /> */}
    //   {/* <HandbookLayout>
    //     <h1>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
    //       provident?
    //     </h1>
    //   </HandbookLayout> */}
    //   <CardTopic />
    //   <Icon order={1} isBoxShadow isCircle isPadding size='sm' />
    //   <NavigatorButton
    //     text='hello'
    //     pathIcon={`${PATH_IMG}/react-logo.svg`}
    //     isTransition
    //     more
    //     round
    //   />
    //   {/* <CardCertificate /> */}
    //   {/* <CardCertificate /> */}
    //   <CardCertificates />
    // </Layout>
  );
}

export default App;
