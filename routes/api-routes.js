let db = require("../models");

module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.status(400).json(err);
          });
    })

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        db.Workout.where("_id", req.params.id).update({$push: {"exercises": req.body}})
        .then(function(results) {
            res.json(results)
        })
        .catch(function(err) {
            console.log(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        console.log(req.body);
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    })
}