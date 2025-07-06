
import { createBrowserRouter } from 'react-router';
import Home from "../../pages/Home"
import Main from '../../Layout/Main';
import Product from '../../pages/Product';
import ProductDetails from '../../pages/ProductDetails';
import CartChart from '../../pages/CartChart';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [

      { index: true, Component: Home },
      { path: "/product", Component: Product },
      { path: "/Product/:id", Component: ProductDetails },
      { path: "/CartChart", Component: CartChart },
   

      
      
    ],
  },

]);

export default router
