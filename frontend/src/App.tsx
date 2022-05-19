import { useState } from 'react';
import CardCertificate from './components/CardCertificate';
import CardCertificates from './components/CardCertificates';
import CardCourse from './components/CardCourse';
import CardInstructor from './components/CardInstructor';
import CardTopic from './components/CardTopic';
import DesignAndCode from './components/DesignAndCode';
import HandbookLayout from './components/HandbookLayout';
import Icon from './components/Icon';
import Layout from './components/Layout';
import { pathImg } from './components/Layout/Header';
import NavigatorButton from './components/NavigatorButton';
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <DesignAndCode />
      <Search />
      {/* <CardCourse />
      <CardInstructor /> */}
      {/* <HandbookLayout>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          provident?
        </h1>
      </HandbookLayout> */}
      <CardTopic />
      <Icon order={1} isBoxShadow isCircle isPadding size='sm' />
      <NavigatorButton
        text='hello'
        pathIcon={`${pathImg}/react-logo.svg`}
        isTransition
        more
        round
      />
      {/* <CardCertificate /> */}
      {/* <CardCertificate /> */}
      <CardCertificates />
    </Layout>
  );
}

export default App;
