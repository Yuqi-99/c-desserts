import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './App.css';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './modules/Home';
import { Category } from 'src/modules/Category';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<div>404</div>}>
			<Route path='/' element={<RootLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/category' element={<Category />} />
			</Route>
		</Route>
	),
	{
		future: { v7_startTransition: true },
	}
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
