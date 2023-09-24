import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CabinSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
})

const CabinModel = mongoose.model('Cabin', CabinSchema);

export default CabinModel