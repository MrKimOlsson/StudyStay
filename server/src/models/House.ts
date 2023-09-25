import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const HouseSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
    avalible: String,
    imageURL: Array,
    unitType: String,
})

const HouseModel = mongoose.model('House', HouseSchema);

export default HouseModel