const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        // required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        // required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        // required: "Enter a duration for your workout",
      },
      distance: {
        type: Number,
        //required: "Enter a distance for your exercise"
      },
      weight: {
        type: Number,
        //required: "Enter the amount of weight used in your exercise"
      },
      reps: {
        type: Number,
        //required: "Enter the number of reps per set for your workout"
      },
      sets: {
        type: Number,
        //required: "Enter the number of sets for your workout"
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
