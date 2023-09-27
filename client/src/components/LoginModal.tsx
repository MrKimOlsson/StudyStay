import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LoginCredentials } from "../api/handleUsers";
import * as handleUsers from "../api/handleUsers";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";
import '../utils/styles/formModal.scss'

interface LoginModalProps {
    onDismiss: () => void;
    onLoginSuccessful: (user: User) => void;
}

const LoginModal = ({ onDismiss, onLoginSuccessful }: LoginModalProps) => {
    const [errorText, setErrorText] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginCredentials>();

    async function onSubmit(credentials: LoginCredentials) {
        try {
            const user = await handleUsers.login(credentials);
            onLoginSuccessful(user); // Update loggedInUser state
            console.log(user)
            onDismiss(); // Close the modal
        } catch (error) {
            if (error instanceof UnauthorizedError) {
                setErrorText(error.message);
            } else {
                alert(error);
            }
            console.error(error);
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onDismiss}>
                    &times;
                </span>
                <h2>Log In</h2>
                {errorText && <div className="alert alert-danger">{errorText}</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            {...register("username", { required: "Required" })}
                        />
                        {errors.username && (
                            <div className="error-text">{errors.username.message}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register("password", { required: "Required" })}
                        />
                        {errors.password && (
                            <div className="error-text">{errors.password.message}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
// import { useForm } from "react-hook-form";
// import { User } from "../models/user";
// import { LoginCredentials } from "../api/handleUsers";
// import * as handleUsers from "../api/handleUsers";
// import { Alert, Button, Form, Modal } from "react-bootstrap";
// import TextInputField from "./form/TextInputField";
// import styleUtils from "../utils/styles/utils.module.css";
// import { useState } from 'react';
// import { UnauthorizedError } from "../errors/http_errors";

// interface LoginModalProps {
//     onDismiss: () => void,
//     onLoginSuccessful: (user: User) => void,
// }

// const LoginModal = ({ onDismiss, onLoginSuccessful }: LoginModalProps) => {

//     const [errorText, setErrorText] = useState<string | null>(null);

//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginCredentials>();

//     async function onSubmit(credentials: LoginCredentials) {
//         try {
//             const user = await handleUsers.login(credentials);
//             onLoginSuccessful(user);
//         } catch (error) {
//             if (error instanceof UnauthorizedError) {
//                 setErrorText(error.message);
//             } else {
//                 alert(error);
//             }
//             console.error(error);
//         }
//     }

//     return (
//         <Modal show onHide={onDismiss}>
//             <Modal.Header closeButton>
//                 <Modal.Title>
//                     Log In
//                 </Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//                 {errorText &&
//                     <Alert variant="danger">
//                         {errorText}
//                     </Alert>
//                 }
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                     <TextInputField
//                         name="username"
//                         label="Username"
//                         type="text"
//                         placeholder="Username"
//                         register={register}
//                         registerOptions={{ required: "Required" }}
//                         error={errors.username}
//                     />
//                     <TextInputField
//                         name="password"
//                         label="Password"
//                         type="password"
//                         placeholder="Password"
//                         register={register}
//                         registerOptions={{ required: "Required" }}
//                         error={errors.password}
//                     />
//                     <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={styleUtils.width100}>
//                         Log In
//                     </Button>
//                 </Form>
//             </Modal.Body>
//         </Modal>
//     );
// }

// export default LoginModal;