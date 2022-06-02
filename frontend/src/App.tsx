import { Route, Routes } from 'react-router-dom';
import HomeProvider from './context/HomeContext';
import Home from './Pages';
import Course from './Pages/Course';
import Courses from './Pages/Courses';
import Tutorials from './Pages/Tutorials';
function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <HomeProvider>
            <Home />
          </HomeProvider>
        }
      />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:courseName' element={<Course />} />
      <Route path='/tutorials' element={<Tutorials />} />
    </Routes>
  );
}

export default App;
