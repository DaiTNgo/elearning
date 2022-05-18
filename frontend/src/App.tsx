import { useState } from 'react';
import DesignAndCode from './components/DesignAndCode';
import Layout from './components/Layout';
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <DesignAndCode />
      <Search />
    </Layout>
  );
}

export default App;
