const db = require("../models")

module.exports = (app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    })
})
