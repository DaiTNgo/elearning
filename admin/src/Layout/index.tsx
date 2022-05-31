import { Container } from '@mui/system';
import React from 'react';
import Navbar from '../components/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<Container maxWidth={'xl'}>{children}</Container>
		</>
	);
}

export default Layout;
