import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Course from './components/Course';
import RequireAuth from './components/RequireAuth';
import Layout from './Layout';
import DashBoard from './pages/DashBoard';
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
							<Course />
						</Layout>
					</RequireAuth>
				}
			/>
			<Route
				path='/edit'
				element={
					<RequireAuth>
						<Layout>
							<Course />
						</Layout>
					</RequireAuth>
				}
			/>
			<Route path='/login' element={<SignIn />} />
		</Routes>
	);
}
export default App;
