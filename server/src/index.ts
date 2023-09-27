import { config } from "dotenv";
config();
import env from "./utils/validateEnv";
import "dotenv/config";

import express , { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cors from "cors";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
// Apartments
import { getApartmentsController } from "./controllers/apartment/getApartmentsController";
import { createApartmentController } from "./controllers/apartment/createApartmentController";
import { deleteApartmentController } from "./controllers/apartment/deleteApartmentController";
import { getApartmentController } from "./controllers/apartment/getApartmentController";
// Rooms
import { getRoomsController } from "./controllers/room/getRoomsController";
import { createRoomController } from "./controllers/room/createRoomController";
import { deleteRoomController } from "./controllers/room/deleteRoomController";
import { getRoomController } from "./controllers/room/getRoomController";
// Houses
import { getHousesController } from "./controllers/house/getHousesController";
import { createHouseController } from "./controllers/house/createHouseController";
import { deleteHouseController } from "./controllers/house/deleteHouseController";
import { getHouseController } from "./controllers/house/getHouseController";
// User
// import { getUsersController } from "./controllers/user/getUsersController";
// import { createUserController } from "./controllers/user/createUserController";
// import { deleteUserController } from "./controllers/user/deleteUserController";
// import { getUserController } from "./controllers/user/getUserController";

import userRoutes from './routes/users'

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(session({
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 60 * 60 * 1000,
  },
  rolling: true,
  store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING
  }),
}));

app.use(express.json());

// Apartments
app.get("/apartments", getApartmentsController);
app.post("/apartments", createApartmentController);
app.delete("/apartments/:apartmentId", deleteApartmentController);
app.get("/apartments/:apartmentId", getApartmentController);

// Rooms
app.get("/rooms", getRoomsController);
app.post("/rooms", createRoomController);
app.delete("/rooms/:roomId", deleteRoomController);
app.get("/rooms/:roomId", getRoomController);

// Houses
app.get("/houses", getHousesController);
app.post("/houses", createHouseController);
app.delete("/houses/:houseId", deleteHouseController);
app.get("/houses/:houseId", getHouseController);

// Users
// app.get("/users", getUsersController);
// app.post("/users", createUserController);
// app.delete("/users/:userId", deleteUserController);
// app.get("/users/:userId", getUserController);

// New user login/regist
// app.post("/users", createUserController);
app.use("/users", userRoutes)

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
      statusCode = error.status;
      errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${env.PORT}`);
  app.listen(env.PORT);
});
