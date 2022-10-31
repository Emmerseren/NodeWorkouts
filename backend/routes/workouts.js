const express = require("express")
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')
const router = express.Router()


// get all woirkouts
router.get('/', getWorkouts)

// get a single workout

router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout )

// delete workout
router.delete('/:id',deleteWorkout)


// update a workout
router.patch('/:id', updateWorkout)

module.exports = router