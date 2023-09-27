import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { SignUpCredentials } from "../api/handleUsers";
import * as Api from "../api/handleUsers";
import { useState } from 'react';
import { ConflictError } from "../errors/http_errors";
import '../utils/styles/formModal.scss';

interface SignUpModalProps {
    onDismiss: () => void,
    onSignUpSuccessful: (user: User) => void,
}

const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {

    const [errorText, setErrorText] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

    async function onSubmit(credentials: SignUpCredentials) {
        try {
            const newUser = await Api.signUp(credentials);
            onSignUpSuccessful(newUser);
        } catch (error) {
            if (error instanceof ConflictError) {
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
                <span className="close" onClick={onDismiss}>&times;</span>
                <h2>Sign Up</h2>
                {errorText &&
                    <div className="alert alert-danger">
                        {errorText}
                    </div>
                }
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register("email", { required: "Required" })}
                        />
                        {errors.email && (
                            <div className="error-text">{errors.email.message}</div>
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpModal;


// import { useForm } from "react-hook-form";
// import { User } from "../models/user";
// import { SignUpCredentials } from "../api/handleUsers";
// import * as Api from "../api/handleUsers";
// import { Alert, Button, Form, Modal } from "react-bootstrap";
// import TextInputField from "./form/TextInputField";
// import styleUtils from "../utils/styles/utils.module.css";
// import { useState } from 'react';
// import { ConflictError } from "../errors/http_errors";

// interface SignUpModalProps {
//     onDismiss: () => void,
//     onSignUpSuccessful: (user: User) => void,
// }

// const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {

//     const [errorText, setErrorText] = useState<string | null>(null);

//     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

//     async function onSubmit(credentials: SignUpCredentials) {
//         try {
//             const newUser = await Api.signUp(credentials);
//             onSignUpSuccessful(newUser);
//         } catch (error) {
//             if (error instanceof ConflictError) {
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
//                     Sign Up
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
//                         name="email"
//                         label="Email"
//                         type="email"
//                         placeholder="Email"
//                         register={register}
//                         registerOptions={{ required: "Required" }}
//                         error={errors.email}
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
//                         Sign Up
//                     </Button>
//                 </Form>
//             </Modal.Body>

//         </Modal>
//     );
// }

// export default SignUpModal;