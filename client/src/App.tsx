// import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import './App.scss';
// import { Provider, useDispatch } from 'react-redux';
// import productsService from './store/products/productsService';
// import { setProductsList} from './store/products/productsSlice';
// import { CartProvider } from './context/CartContext';
// import { ProductType } from './utils/types/product'
// import store, { AppDispatch, RootState } from './store/index'; // Import RootState

// Pages
import Home from './routes/Home';
import Details from './routes/Details';
import Apartment from './routes/Apartment';
import AddApartment from './routes/AddApartment';

const App = () => {
  // const dispatch = useDispatch<AppDispatch>(); // Specify AppDispatch type

  // useEffect(() => {
  //   async function fetchAndSetProducts() {
  //     try {
  //       const productsData: ProductType[] = await productsService.fetchProducts();
  //       dispatch(setProductsList(productsData)); // Dispatch the action with fetched products
  //       console.log(productsData);
  //     } catch (error) {
  //       // Handle error
  //     }
  //   }
  //   fetchAndSetProducts();
  // }, [dispatch]);

  // Create a BrowserRouter using the createBrowserRouter function
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        // Route for the home page
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'details',
          element: <Details />,
        },
        {
          path: 'apartment/:id',
          element: <Apartment />,
        },
        {
          path: 'addApartment',
          element: <AddApartment />,
        },
      ],
    },
  ]);

  // Render the RouterProvider component with the created router if authIsReady is true
  return (
    <div className='app'>
      {/* <Provider store={store}> */}
          <RouterProvider router={router} />
      {/* </Provider> */}
    </div>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
