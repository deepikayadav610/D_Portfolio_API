import mongoose from "mongoose";

// contact me schema
const contactMeSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require:true},
    message: {type:String, require: true}
});

export const contactMe = mongoose.model("ContactMe", contactMeSchema)