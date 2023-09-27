// import { Request, Response } from "express";
// import User from "../../models/User";
// import jwt from "jsonwebtoken";

// export async function createUserController(req: Request, res: Response) {
//   try {
//     const newUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       // ... other user data properties
//     });

//     const createdUser = await newUser.save();

//     // Generate a JWT token with user data
//     const userData = {
//       id: createdUser._id,
//       email: createdUser.email,
//       // ... add other user data as needed
//     };

//     const token = jwt.sign(userData, 'your-secret-key'); // Replace with your secret key

//     // Respond with the token
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// }


// import { Request, Response } from "express";
// import User from "../../models/User";

// export async function createUserController(req: Request, res: Response) {
//   const newUser = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     // _id: req.body._id,

//   });
//   const createdUser = await newUser.save();
//   res.json(createdUser);
// }