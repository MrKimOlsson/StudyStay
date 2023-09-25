import React, {  useState } from "react";
// import { Link } from "react-router-dom";
import { createUser } from "../api/createUser";
import '../utils/styles/registerForm.scss'

const RegisterUser = () => {

    const [users, setUsers] = useState<TUser[]>([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    
    async function handleCreateUser(e: React.FormEvent) {
      e.preventDefault();
      const user = await createUser(firstName, lastName, email, address, phone);
      setUsers([...users, user]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setAddress("");
      setPhone("");
    }
    
    return (
      <div className="container">
        <form onSubmit={handleCreateUser} id="registerForm">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(e.target.value);
            }}
          />
    
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
          />
    
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
    
          <label htmlFor="address">Address</label>
          <input
            id="address"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAddress(e.target.value);
            }}
          />
    
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPhone(e.target.value);
            }}
          />
    
          <button>Create User</button>
        </form>
    </div>
  )
}

export default RegisterUser