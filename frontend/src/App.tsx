import { Route, Routes } from 'react-router-dom';
import Home from './Pages';
import Course from './Pages/Course';
import Courses from './Pages/Courses';
import Tutorials from './Pages/Tutorials';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:courseName' element={<Course />} />
      <Route path='/tutorials' element={<Tutorials />} />
    </Routes>
  );
}

export default App;
