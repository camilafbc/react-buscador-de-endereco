import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import SearchAddress from './pages/SearchAddress';
import SearchZipCode from './pages/SearchZipCode';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <SearchAddress />
            },
            {
                path: "buscar-cep",
                element: <SearchZipCode />
            }
        ]
    }
])

export default router