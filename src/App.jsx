import './App.css';

import { RouterProvider } from 'react-router';
import router from './components/Routes/Routes';
 import store from './store';
 import {Provider} from "react-redux";



function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;


// #######################################chat gpt code 
// import { createBrowserRouter } from 'react-router-dom';
// import ProductLfPart from '../ProductPage/ProductLfPart';
// import ProductRightPart from '../ProductPage/ProductRightPart';
// import CategoryProducts from '../../pages/CategoryProducts'; // ⬅️ NEW PAGE

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ProductLfPart />,
//   },
//   {
//     path: '/product-list',
//     element: <ProductRightPart />,
//   },
//   {
//     path: '/category/:categoryName',
//     element: <CategoryProducts />, // ⬅️ NEW ROUTE
//   },
// ]);

// export default router;


