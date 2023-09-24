import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const ApartmentSchema = new Schema({
    title: String,
    price: String,
    description: String,
    period: String,
})

const ApartmentModel = mongoose.model('Apartment', ApartmentSchema);

export default ApartmentModel