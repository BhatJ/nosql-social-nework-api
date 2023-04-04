const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// GET and POST routes for /api/thoughts
// Get all thoughts and create a new thought
router.route('/').get(getThoughts).post(createThought);

// GET, PUT, and DELETE routes /api/thoughts/:thoughtId
// Get a single thought, update an existing thought, delete an existing thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE routes for /api/thoughts/:thoughtId/reactions
// Add and delete reactions from a thought
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;