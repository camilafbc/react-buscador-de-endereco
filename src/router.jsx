import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SearchAddress from './pages/SearchAddress'
import SearchZipCode from './pages/SearchZipCode'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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

