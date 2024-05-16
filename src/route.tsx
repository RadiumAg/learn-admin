import Home from './pages/home';
import AdminLayout from './pages/layout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

export { router };
