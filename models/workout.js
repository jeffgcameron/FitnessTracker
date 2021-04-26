const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      distance: {
        type: Number,
        //required: "Enter a distance for your exercise"
      },
      duration: {
        type: Number,
        required: "Enter a duration for your workout",
      },
      weight: {
        type: Number,
        //required: "Enter the amount of weight used in your exercise"
      },
      set: {
        type: Number,
        //required: "Enter the number of sets for your workout"
      },
      reps: {
        type: Number,
        //required: "Enter the number of reps per set for your workout"
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
