import { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className='App'>hello world</div>
    </Layout>
  );
}

export default App;
