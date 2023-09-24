import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HouseSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
})

const HouseModel = mongoose.model('House', HouseSchema);

export default HouseModel