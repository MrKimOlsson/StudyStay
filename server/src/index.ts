import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
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
import { getUsersController } from "./controllers/user/getUsersController";
import { createUserController } from "./controllers/user/createUserController";
import { deleteUserController } from "./controllers/user/deleteUserController";
import { getUserController } from "./controllers/user/getUserController";

const PORT = 5000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
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
app.get("/users", getUsersController);
app.post("/users", createUserController);
app.delete("/users/:userId", deleteUserController);
app.get("/users/:userId", getUserController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
