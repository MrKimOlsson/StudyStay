// import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import * as getUser from "./api/getLoggedInUser";
// import LoginModal from '../components/LoginModal';
// import SignUpModal from '../components/SignUpModal';
// import { User } from './models/user';
import Root from './routes/Root';
import './App.scss';

// Pages
import Home from './routes/Home';
// import Details from './routes/Details';
import Residential from './routes/Residential';
import AddApartment from './routes/AddApartment';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';



const App = () => {

  // const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

	// // const [showSignUpModal, setShowSignUpModal] = useState(false);
	// // const [showLoginModal, setShowLoginModal] = useState(false);

	// useEffect(() => {
	// 	async function fetchLoggedInUser() {
	// 		try {
	// 			const user = await getUser.getLoggedInUser();
	// 			setLoggedInUser(user);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchLoggedInUser();
	// }, []);

  // console.log(loggedInUser)
  
  // const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

	// const [showSignUpModal, setShowSignUpModal] = useState(false);
	// const [showLoginModal, setShowLoginModal] = useState(false);

	// useEffect(() => {
	// 	async function fetchLoggedInUser() {
	// 		try {
	// 			const user = await handleUsers.getLoggedInUser();
	// 			setLoggedInUser(user);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchLoggedInUser();
	// }, []);

  // Create a BrowserRouter using the createBrowserRouter function
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root 
      // loggedInUser={loggedInUser}
      // onLoginClicked={() => setShowLoginModal(true)}
      // onSignUpClicked={() => setShowSignUpModal(true)}
      // onLogoutSuccessful={() => setLoggedInUser(null)}
      />,
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
        {
          path: 'login',
          element: <Login />,
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