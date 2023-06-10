import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String,
    mobileNumber: String,
    dateOfBirth: Date,
    businessType: String,
    businessDocument: String,
    aadharNumber: Number,
    businessAddress: String,
    pincode: Number,
    city: String,
    state: String,
    userCreatedAt: {
        type: Date,
        default: new Date()
    }
})

const UserDetails = mongoose.model('UserDetails', userSchema);

export default UserDetails;