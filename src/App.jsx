import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route
} from 'react-router-dom'
import Layout from './components/containers/Layout/Layout.component'
import PageNotFound from './components/molecules/Errors/PageNotFound/PageNotFound.component'
import Navbar from './components/molecules/Navbar/Navbar.component'
import Category from './pages/Category'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Checkout from './pages/Checkout'
import { CartContextProvider } from '../store/CartContextProvider'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route exact path='category/:categoryId' element={<Category />} />
      <Route exact path='item/:id' element={<ItemDetail />} />
      <Route exact path='checkout' element={<Checkout />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

function AppLayout () {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

function App () {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App
