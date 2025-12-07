import mongoose from "mongoose";
import { Film } from "@/types";

const filmSchema = new mongoose.Schema<Film>({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    genre: [{
        type: String,
        required: true,
    }],
    releaseYear: {
        type: Number,
        required: true,
    },
    runningTime: {
        type: Number,
        required: [true, 'Running time is required'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required']
    },
}, {
    timestamps: true,
});

export default mongoose.models.Film || mongoose.model('Film', filmSchema);