const router = require("express").Router();
const workout = require("../models/workout.js");

// API GET routes
router.get("/api/workouts", (req, res) => {
    workout.find({})
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// API POST routes
router.post("/api/workouts", ({ body }, res) => {
    workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// API PUT route
router.put("/api/workouts/:id", ({ body, params }, res) => {
    workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});
module.exports = router;