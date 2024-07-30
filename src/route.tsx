import Home from './pages/home';
import Pdf from './pages/pdf';
import AdminLayout from './pages/layout';
import { createBrowserRouter } from 'react-router-dom';
import UserManage from './pages/user-manage';
import NotFound from './pages/not-found';

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
      {
        path: 'read/pdf',
        element: <Pdf />,
      },
      {
        path: 'user/manage',
        element: <UserManage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
