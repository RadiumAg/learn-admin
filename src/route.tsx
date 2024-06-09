import Home from './pages/home';
import Pdf from './pages/pdf';
import AdminLayout from './pages/layout';
import PdfCreate from './pages/pdf-create';
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
      {
        path: 'read/pdf',
        element: <Pdf />,
      },
      {
        path: 'read/pdfCreate',
        element: <PdfCreate />,
      },
    ],
  },
]);

export { router };
