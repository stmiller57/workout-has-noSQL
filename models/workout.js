const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "You must pick an exercise type",
            },
            name: {
                type: String,
                trim: true,
                required: "You must select an exercise name",
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
            reps: {
                type: Number,
                required: true,
            },
            sets: {
                type: Number,
                required: true,
            },
            distance: {
                type: Number,
                required: true,
            },
        },
    ],
});

const workout = mongoose.model("exercise", exerciseSchema);

module.exports = workout;