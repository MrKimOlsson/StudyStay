import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import './App.scss';

// Pages
import Home from './routes/Home';
// import Details from './routes/Details';
import Residential from './routes/Residential';
import AddApartment from './routes/AddApartment';
import RegisterUser from './components/RegisterUser';

const App = () => {

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
        // {
        //   path: 'details',
        //   element: <Details />,
        // },
        {
          path: 'residential/:unitType/:id',
          element: <Residential />,
        },
        {
          path: 'addApartment',
          element: <AddApartment />,
        },
        {
          path: 'register',
          element: <RegisterUser />,
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