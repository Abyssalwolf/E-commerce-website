import React from "react";
import Header from "./components/Header"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet/> 
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/",
    element: <Layout/>,
    children: [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  ],
},
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default Layout;
