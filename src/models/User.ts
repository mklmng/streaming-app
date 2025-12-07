import mongoose from "mongoose";
import { User } from "@/types";

const userSchema = new mongoose.Schema<User>({
    email: {
        type: String,
        required: [true, 'Email is requried'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    subscription: {
        type: String,
        enum: ['basic', 'standard', 'premium'],
        default: 'basic',
    },
    watchlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Film',
    }],
}, {
    timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', userSchema);