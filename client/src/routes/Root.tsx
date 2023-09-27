import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import { User } from '../models/user';

const RootLayout = () => {
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // Callback to update the loggedInUser state
    const handleLoginSuccessful = (user: User) => {
        setLoggedInUser(user);
    };

    // Callback to clear the loggedInUser state on logout
    // const handleLogoutSuccessful = () => {
    //     setLoggedInUser(null);
    // };

    return (
        <>
            <Navbar
                loggedInUser={loggedInUser}
                onLoginClicked={() => setShowLoginModal(true)}
                onSignUpClicked={() => setShowSignUpModal(true)}
                onLogoutSuccessful={() => setLoggedInUser(null)} // Pass the logout callback
            />

            <div className="wrapper">
                {showSignUpModal && (
                    <SignUpModal
                        onDismiss={() => setShowSignUpModal(false)}
                        onSignUpSuccessful={handleLoginSuccessful} // Pass the login callback
                    />
                )}
                {showLoginModal && (
                    <LoginModal
                        onDismiss={() => setShowLoginModal(false)}
                        onLoginSuccessful={handleLoginSuccessful} // Pass the login callback
                    />
                )}
                <Outlet />
            </div>

            <Footer />
        </>
    );
};

export default RootLayout;







// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer';
// import { useState } from 'react';
// // import * as handleUsers from "../api/handleUsers";
// import LoginModal from '../components/LoginModal';
// import SignUpModal from '../components/SignUpModal';
// import { User } from '../models/user';

// // interface RootProps {
// //   loggedInUser: User | null,
// // }



// const RootLayout = () => {
//   // const RootLayout = ({ loggedInUser }: RootProps) => {

//   const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
// 	const [showSignUpModal, setShowSignUpModal] = useState(false);
// 	const [showLoginModal, setShowLoginModal] = useState(false);

// 	// useEffect(() => {
// 	// 	async function fetchLoggedInUser() {
// 	// 		try {
// 	// 			const user = await handleUsers.getLoggedInUser();
// 	// 			setLoggedInUser(user);
// 	// 		} catch (error) {
// 	// 			console.error(error);
// 	// 		}
// 	// 	}
// 	// 	fetchLoggedInUser();
// 	// }, []);


//   return (
//     <>
//       {/* Render the Navbar component */}      
//       <Navbar 
//       loggedInUser={loggedInUser}
//       onLoginClicked={() => setShowLoginModal(true)}
//       onSignUpClicked={() => setShowSignUpModal(true)}
//       onLogoutSuccessful={() => setLoggedInUser(null)}
//       />
    

//       <div className="wrapper">
// 				{showSignUpModal &&
// 					<SignUpModal
// 						onDismiss={() => setShowSignUpModal(false)}
// 						onSignUpSuccessful={(user) => {
// 							setLoggedInUser(user);
// 							setShowSignUpModal(false);
// 						}}
// 					/>
// 				}
// 				{showLoginModal &&
// 					<LoginModal
// 						onDismiss={() => setShowLoginModal(false)}
// 						onLoginSuccessful={(user) => {
// 							setLoggedInUser(user);
// 							setShowLoginModal(false);
// 						}}
// 					/>
// 				}
//         {/* Renders a child components of the RootLayout element component AKA the pages */}
//         <Outlet 
        
//         />
//       </div>

//       {/* Render the Footer component */}
//       <Footer />
//     </>
//   );
// }

// export default RootLayout