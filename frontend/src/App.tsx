import { useState } from 'react';
import CardCertificate from './components/CardCertificate';
import CardCertificates from './components/CardCertificates';
import CardCourse from './components/CardCourse';
import CardDetail from './components/CardDetail';
import CardInstructor from './components/CardInstructor';
import CardSection from './components/CardSection';
import CardSectionWrapper from './components/CardSectionWrapper';
import CardTopic from './components/CardTopic';
import CardWrapper from './components/CardWrapper';
import CertificateSection from './components/CertificateSection';
import CourseCard from './components/CourseCard';
import CourseHero from './components/CourseHero';
import DesignAndCode from './components/DesignAndCode';
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
      {/* <CourseHero />
      <CardSection />
      <CardWrapper /> */}
      {/* <HeroSection />
      <TutorialSection />
      <DiscountSection />
      <TrustSection />
      <SponsorSection />
      <MeetInstructor />
      <Ready />
    <Footer /> */}
      {/* <CardSectionWrapper />
       */}
      <CourseCard left component={<CardCourse />} />
      <Handbook />
      <CertificateSection />
      <Pricing />
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
