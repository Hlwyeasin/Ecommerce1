import './App.css';

import { RouterProvider } from 'react-router';
import router from './components/Routes/Routes';



function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
