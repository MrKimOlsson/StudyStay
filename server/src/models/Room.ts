import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const RoomSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
    avalible: String,
    imageURL: Array,
    unitType: String,
})

const RoomModel = mongoose.model('Room', RoomSchema);

export default RoomModel