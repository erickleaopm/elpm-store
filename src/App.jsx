import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route
} from 'react-router-dom'

import Layout from './components/containers/Layout/Layout.component'
import Navbar from './components/molecules/Navbar/Navbar.component'
import Category from './pages/Category'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route exact path='category/:categoryId' element={<Category />} />
      <Route exact path='item/:id' element={<ItemDetail />} />
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
  return <RouterProvider router={router} />
}

export default App
