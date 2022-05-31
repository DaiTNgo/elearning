import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Course from './components/Course';
import RequireAuth from './components/RequireAuth';
import Layout from './Layout';
import CreateCourse from './pages/CreateCourse';
import DashBoard from './pages/DashBoard';
import EditCourse from './pages/EditCourse';
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
		</Routes>
	);
}
export default App;
