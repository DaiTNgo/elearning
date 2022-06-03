import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './Layout';
import CreateCourse from './pages/CreateCourse';
import DashBoard from './pages/DashBoard';
import EditCourse from './pages/EditCourse';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <Layout>
              <DashBoard />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path='/create-course'
        element={
          <RequireAuth>
            <Layout>
              <CreateCourse />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path='/edit/:courseId'
        element={
          <RequireAuth>
            <Layout>
              <EditCourse />
            </Layout>
          </RequireAuth>
        }
      />
      <Route path='/login' element={<SignIn />} />
      <Route
        path='/profile'
        element={
          <RequireAuth>
            <Layout>
              <Profile />
            </Layout>
          </RequireAuth>
        }
      />
    </Routes>
  );
}
export default App;
