import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
})

const RoomModel = mongoose.model('Room', RoomSchema);

export default RoomModel