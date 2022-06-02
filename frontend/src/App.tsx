import { Route, Routes } from 'react-router-dom';
import Modal from './components/Modal';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import Home from './Pages';
import Course from './Pages/Course';
import Courses from './Pages/Courses';
import Livestreams from './Pages/Livestreams';
import NotFound from './Pages/NotFound';
import Tutorials from './Pages/Tutorials';
import { clickClose } from './redux/playSlice';
function App() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.start.isOpen);
  const link = useAppSelector((state) => state.start.link);
  const handleClose = () => {
    dispatch(clickClose());
  };

  return (
    <>
      <Modal open={isOpen} handleClose={handleClose}>
        <iframe
          width='100%'
          height='100%'
          src={`${link.replace('.com/', '.com/embed/')}`}
          title='YouTube video player'
          allowFullScreen={true}
        ></iframe>
      </Modal>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseName' element={<Course />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/livestreams' element={<Livestreams />} />
        <Route path='/pricing' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
