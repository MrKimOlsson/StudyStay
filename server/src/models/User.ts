import { InferSchemaType, model, Schema } from "mongoose";

// const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true, select: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, select: false, unique: true},
    password : { type: String, required: true, select: false }
})

type User = InferSchemaType<typeof UserSchema>;

export default model<User>("User", UserSchema);


// Old version

// import mongoose from "mongoose";

// const Schema = mongoose.Schema;
// // const ObjectId = mongoose.Types.ObjectId;

// const UserSchema = new Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true, select: false },
//     email: { type: String, required: true, select: false }
// })

// const UserModel = mongoose.model('User', UserSchema);

// export default UserModel