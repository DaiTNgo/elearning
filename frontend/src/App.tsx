import { useState } from 'react';
import CardCertificate from './components/CardCertificate';
import CardCertificates from './components/CardCertificates';
import CardCourse from './components/CardCourse';
import CardInstructor from './components/CardInstructor';
import CardTopic from './components/CardTopic';
import CourseHero from './components/CourseHero';
import DesignAndCode from './components/DesignAndCode';
import HandbookLayout from './components/HandbookLayout';
import HeroSection from './components/HeroSection';
import Icon from './components/Icon';
import Layout from './components/Layout';
import NavigatorButton from './components/NavigatorButton';
import Search from './components/Search';
import { PATH_IMG } from './utils/constant';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <CourseHero />
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
