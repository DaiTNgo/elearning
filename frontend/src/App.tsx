import { Route, Routes } from 'react-router-dom';
import Home from './Pages';
import Course from './Pages/Course';
import Courses from './Pages/Courses';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:courseName' element={<Course />} />
    </Routes>
  );
}

export default App;
