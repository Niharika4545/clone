import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import NotificationsList from "./components/NotificationsList";

const App=()=> {
	const [authUser] = useAuthState(auth);

	return (
		//The app is wrapped within the page layout
		<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
				<Route path="/notifications" element={<NotificationsList />} />
			</Routes>
		</PageLayout>
	);
}

export default App;
