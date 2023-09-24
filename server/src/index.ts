import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getApartmentsController } from "./controllers/apartment/getApartmentsController";
import { createApartmentController } from "./controllers/apartment/createApartmentController";
import { deleteApartmentController } from "./controllers/apartment/deleteApartmentController";
import { getApartmentController } from "./controllers/apartment/getApartmentController";
// import { createCardForDeckController } from "./controllers/apartment/createCardForDeckController";
// import { deleteCardOnDeckController } from "./controllers/apartment/deleteCardOnDeckController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/apartments", getApartmentsController);
app.post("/apartments", createApartmentController);
app.delete("/apartments/:apartmentId", deleteApartmentController);
app.get("/apartments/:apartmentId", getApartmentController);
// app.post("/decks/:deckId/cards", createCardForDeckController);
// app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
