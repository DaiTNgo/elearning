import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { getUser } from '../redux/authSlice';

export default function RequireAuth({ children }: { children: JSX.Element }) {
	const user = useAppSelector(getUser);
	let location = useLocation();

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace={true} />;
	}

	return children;
}
