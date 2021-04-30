let db = require("../models");

// module.exports = function(app) {
//     app.get("/api/workouts", function(req, res) {
//         db.Workout.find({}).then(function(workout) {
//             res.json(workout);
//         })
//     })
// }




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
}

// module.exports = (app) => {
//     app.get("/api/workouts", (req, res) => {
//         db.Workout.find({}, (err, workouts) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 res.json(workouts)
//             }
//         })
//     })


// }